import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Events, LoadingController } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
	loginForm: FormGroup;

	error_messages = {
		'cpf':[
			{type:'required',message:'CPF é necessário.'},
			{type:'minlength',message:'CPF inválido.'}
		],
		'password':[
			{type:'required',message:'Senha é necessário.'}
		],
	}

	constructor(public formBuilder: FormBuilder,
		 public http: Http,
		 private router: Router,
		 private storage: Storage,
		 private events:Events,
	 	 private authService: AuthenticationService,
	 	 private loadingController: LoadingController){
		this.loginForm = this.formBuilder.group({
			cpf:new FormControl('',Validators.compose([Validators.required,Validators.minLength(14)])),
			password:new FormControl('',Validators.compose([Validators.required]))
		});
	}



	public login() {
		let data ={'cpf': this.loginForm.value.cpf, 'password': this.loginForm.value.password};
		this.authService.login(data);
	}

	async ngOnInit(){
		const loading = await this.loadingController.create({
				message: 'Carregando...',
		});
		await loading.present();
		this.authService.checkToken().then(res => {
			loading.dismiss();
		}).catch((error) =>
		{
			loading.dismiss();
		});
	}
}
