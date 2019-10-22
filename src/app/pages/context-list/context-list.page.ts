import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormsubmitService } from './../../services/formsubmit.service';

@Component({
  selector: 'app-context-list',
  templateUrl: './context-list.page.html',
  styleUrls: ['./context-list.page.scss'],
})
export class ContextListPage implements OnInit {
	contexts : any;
  constructor(private formService: FormsubmitService,
	private storage:Storage) { }

  ngOnInit() {
  }
	ionViewWillEnter() {
		this.updateContexts();
	}
	updateContexts(){
		this.storage.get('token').then(token => {
			if (token) {
				let data = { 'token': token };
				this.formService.postSubmit('https://api.fundacaocefetminas.org.br/getVisibleContexts', data)
				.subscribe( data => {
					this.updateScreen(data);
		    });
			}
		});
	}
	updateScreen(data){
		this.contexts=data.contexts
	}
}
