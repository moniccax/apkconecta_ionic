import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
	providers: [InAppBrowser]
})
export class MenuPage implements OnInit {
	out_pages = [
		{
			title: 'Sistemas de Informação FCM',
			url: '/menu/main',
			external: false,
			icon: 'home'
		},
		{
			title: 'Institucional',
			children: [
				{
					title: 'A FCM',
					url: 'http://fundacaocefetminas.org.br',
					external: true
				},
				{
					title: 'Empresas Instituidoras',
					url: 'http://fcmidiomas.com.br',
					external: true
				},
				{
					title: 'Gestão 2017-2021',
					url: 'http://fcmidiomas.com.br',
					external: true
				},
				{
					title: 'Apoio ao CEFET-MG',
					url: 'http://fcmidiomas.com.br',
					external: true
				},
				{
					title: 'Estatuto',
					url: 'http://fcmidiomas.com.br',
					external: true
				},
				{
					title: 'Relatório de Gestão',
					url: 'http://fcmidiomas.com.br',
					external: true
				},
			]
		}
	]

	logged_pages = [
		{
			title: 'Página inicial',
			url: '/menu/posts',
			external: false,
			icon: 'home'
		},
		{
			title: 'Perfil',
			url: '/menu/profile',
			external: false,
			icon: 'person'
		},
		{
			title: 'Contextos',
			url: '/menu/context-list',
			external: false,
			icon: 'settings'
		},
		{
			title: 'Sair',
			url: '/menu/main',
			click: true,
			external: false,
			icon: 'power'
		}
	]
	pages=[]
	logged;
  constructor(private iab: InAppBrowser, private storage: Storage,private router:Router, private events:Events,private authService: AuthenticationService) {
	}
	public logout(){
		this.authService.logout();
	}

  ngOnInit() {
		this.events.subscribe('login', (data) => {
      this.logged=true;
    });
		this.events.subscribe('logout', (data) => {
      this.logged=false;
    });
  }

	OpenUrl(Url: string, myEvent) {
    const browser = this.iab.create(Url);
    browser.show();
  }
}
