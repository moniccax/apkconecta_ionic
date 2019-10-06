import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Events } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SubmitService } from './submit.service';
const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	cpf: any;
	password: any;
  authenticationState = new BehaviorSubject(false);

  constructor(public http: Http,
		private storage: Storage,
		private events: Events,
		private toastController: ToastController,
		private router: Router,
		private submitService: SubmitService) {
  }
	
	async presentSuccessToast(name) {
		const toast = await this.toastController.create({
			message: 'Bem vindo(a) '+name.split(' ')[0]+"!",
			duration: 2000,
			color: 'success'
		});
		toast.present();
	}

	async presentFailedToast() {
		const toast = await this.toastController.create({
			message: "CPF ou senha incorretos!",
			duration: 2000,
			color: 'danger'
		});
		toast.present();
	}

	async presentErrorToast() {
		const toast = await this.toastController.create({
			message: "Não foi possivel se conectar ao servidor!",
			duration: 2000,
			color: 'danger'
		});
		toast.present();
	}

	reload_token(){
		return new Promise((resolve, reject) => {
			this.storage.get('cpf').then(res => {
				if (res) {
					this.cpf=res;
					this.storage.get('password').then(resPassword => {
						if(resPassword){
							this.password=resPassword;
							let credentials ={'cpf':this.cpf, 'password': this.password};
							this.submitService.postSubmit('https://api.fundacaocefetminas.org.br/login', credentials).subscribe(res => {
								this.saveCredentials(credentials,res).then(() => {
									this.authenticationState.next(true);
									this.events.publish('login');
									resolve(res.token);
								});
					    });
						}
						else{
							this.authenticationState.next(false);
							reject(new Error("login failed"));
						}
					});
				}
				else{
					this.authenticationState.next(false);
					reject(new Error("login failed"));
				}
			});
		});
	}

	saveCredentials(data,res){
		let promises=[];
		promises.push(this.storage.set('cpf', data.cpf));
		promises.push(this.storage.set('password', data.password));
		promises.push(this.storage.set('name', res.nome));
		promises.push(this.storage.set(TOKEN_KEY,res.token));
		return Promise.all(promises);
	}

  login(data) {
		this.submitService.postSubmit('https://api.fundacaocefetminas.org.br/login', data).subscribe( res => {
			console.log('API Response : ', res);
			if(res.success){
				this.saveCredentials(data,res).then( ()=> {
					this.presentSuccessToast(res.nome);
					this.authenticationState.next(true);
					this.events.publish('login');
					this.router.navigateByUrl('/menu/tabs');
				});
			}
			else{
				this.presentFailedToast();
			}
		}, error =>{
				console.error('API Error : ', error.status);
				console.error('API Error : ', JSON.stringify(error));
				this.presentErrorToast();
			});
  }

	logout() {
		this.storage.set('logged',false);
		this.storage.remove('cpf');
		this.storage.remove('password');
		this.storage.remove('name');
    return this.storage.remove(TOKEN_KEY).then(() => {
			this.events.publish('logout');
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

}
