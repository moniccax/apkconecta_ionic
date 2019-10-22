import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormsubmitService } from './../../services/formsubmit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-context',
  templateUrl: './context.page.html',
  styleUrls: ['./context.page.scss'],
})
export class ContextPage implements OnInit {
	context: any;
	id: any;
  constructor(private formService: FormsubmitService,
							private activatedRoute: ActivatedRoute,
							private storage: Storage) { }

	ngOnInit() {
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
		this.showContext();
  }

	showContext() {
    this.storage.get('token').then(token => {
      if (token) {
        const data = {'token': token };
        this.formService.postSubmit('https://api.fundacaocefetminas.org.br/getContext/'+this.id, data).subscribe(
          res => {
						console.log("request"+res);
            if (res['success']) {
              this.context = res['context'];
            }
          },
          err => {
          }
        );
      }
    });
  }

}
