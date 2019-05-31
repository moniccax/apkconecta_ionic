import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})

export class PostsPage implements OnInit {

  sliderConfig = {
    autoHeight: true
  };

  contexts: any;

  constructor(private storage: Storage, private http: Http) { }

  ngOnInit() {
		let shand=document.getElementsByClassName('context-button') as HTMLCollectionOf<HTMLElement>;
		if (shand.length != 0) {
			shand[0].style.setProperty('--background', shand[0].style.getPropertyValue('background'));
		}
	}

  ionViewWillEnter() {
		this.showContexts();
	}

  showContexts() {
    this.storage.get('token').then(token => {
      if (token) {
        let data = { 'token': token };
        let headers = new Headers(
          {
            'Content-Type': 'application/json'
          });
        let options = new RequestOptions({ headers: headers });
        this.http.post('https://api.fundacaocefetminas.org.br/getPosts', data, options)
          .toPromise()
          .then((response) => {
            if (response.json().success) {
              this.contexts=response.json().contexts
              console.log("success");
            }else{
              console.log("fail");
            }
          })
      }
    })
  }

}
