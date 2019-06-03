import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-modal-add-post',
  templateUrl: './modal-add-post.page.html',
  styleUrls: ['./modal-add-post.page.scss'],
})
export class ModalAddPostPage implements OnInit {

  addPostForm: FormGroup;
  contexts: any;

  constructor(private modalCrtl: ModalController, private storage: Storage, private http: Http) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
      this.showVisibleContexts();
  }

  closeModal() {
    this.modalCrtl.dismiss();
  }

  clickInputFile (){
    document.getElementById('post_img_input').click();
  }

  showImgName(){
    let img_input = <HTMLInputElement>document.getElementById('post_img_input');
    let img_files = img_input.files;
    for(let i=0; i<img_files.length; i++){
      (<HTMLInputElement>document.getElementById('img_name')).value = (<HTMLInputElement>document.getElementById('img_name')).value + img_files[i].name + '\n';
    }
  }

  showVisibleContexts() {
    this.storage.get('token').then(token => {
      if (token) {
        let data = { 'token': token };
        let headers = new Headers(
          {
            'Content-Type': 'application/json'
          });
        let options = new RequestOptions({ headers: headers });
        this.http.post('https://api.fundacaocefetminas.org.br/getVisibleContexts', data, options)
          .toPromise()
          .then((response) => {
            if (response.json().success) {
              this.contexts = response.json().contexts;
            } else {
              console.log("Fail");
            }
          })
      }
    })
  }

  submitAddPost(){
		let data ={};
		console.log(data);
	}

}
