import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Events } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(public http: Http,
		private storage: Storage,
		private plt: Platform,
		private events: Events,
		private toastController: ToastController,
		private router: Router) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
			else{
				this.storage.get('cpf').then(resCpf => {
					if(resCpf){
						this.storage.get('password').then(resPassword => {
							if(resPassword){

							}
						})
					}
				})
			}
			this.authenticationState.next(false);
    })
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

  login(data) {
		let headers = new Headers(
		{
			'Content-Type' : 'application/json'
		});
		let options = new RequestOptions({ headers: headers });
		this.http.post('https://api.fundacaocefetminas.org.br/login', data, options)
		.toPromise()
		.then((response) =>
		{
			console.log('API Response : ', response.json());
			if(response.json().success){
				console.log('Token : ', response.json().token);
				this.storage.set('cpf', data.cpf);
				this.storage.set('password', data.password);
				this.storage.set('name', response.json().nome);
				this.storage.set('token', response.json().token);
				this.storage.set('logged', true);
				this.presentSuccessToast(response.json().nome);
				this.storage.set(TOKEN_KEY,response.json().token).then(() => {
					this.events.publish('login');
					this.authenticationState.next(true);
					this.router.navigateByUrl('/menu/tabs');
				});
			}
			else{
				this.presentFailedToast();
			}
		})
		.catch((error) =>
		{
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
