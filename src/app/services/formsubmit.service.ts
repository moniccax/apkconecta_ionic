import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FormsubmitService {

  constructor(public http: Http,
		private storage: Storage,
		private authService: AuthenticationService) {

		}

	formSubmit(url,data){
		return new Promise((resolve, reject) => {
			let headers = new Headers({
				'Content-Type' : 'application/json'
			});
			let options = new RequestOptions({ headers: headers });
			this.http.post(url, data, options)
			.toPromise().then((response) =>{
				console.log('API Response : ', response.json());
				if(response.json().logged){
					if(response.json().success){
						resolve(response.json().message);
					}
					else{
						reject(new Error(response.json().message));
					}
				}
				else{
					this.authService.reload_token().then(res => {
						this.storage.get('token').then((val) => {
							data.token= val;
							this.formSubmit(url,data);
						});
					}).catch((error) =>{
						this.authService.logout();
						reject(new Error("Sessão invalida!"));
					});
				}
			})
			.catch((error) =>{
				console.error('API Error : ', error.status);
				console.error('API Error : ', JSON.stringify(error));
				reject(new Error("Erro ao submeter formulário!"));
			});
		});
	}
}
