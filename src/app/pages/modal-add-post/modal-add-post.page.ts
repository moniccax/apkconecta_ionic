import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-modal-add-post',
  templateUrl: './modal-add-post.page.html',
  styleUrls: ['./modal-add-post.page.scss'],
})

export class ModalAddPostPage implements OnInit {

  addPostForm: FormGroup;
  contexts: any;

  constructor(
    private formBuilder: FormBuilder,
    private storage: Storage,
    private http: Http,
    private modalController: ModalController,
    private authService: AuthenticationService
  ) {
    this.addPostForm = this.formBuilder.group({
      post_images: new FormControl(),
      post_title: new FormControl('', Validators.compose([Validators.required])),
      post_text: new FormControl(),
      post_visibility: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.showVisibleContexts();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  clickInputFile() {
    document.getElementById('post_images').click();
  }

  showImgName() {
    let img_input = <HTMLInputElement>document.getElementById('post_images');
    let img_files = img_input.files;
    for (let i = 0; i < img_files.length; i++) {
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

  submitAddPost() {
    let data = { 'post_images': this.addPostForm.getRawValue().post_images, 'post_title': this.addPostForm.getRawValue().post_title, 'post_text': this.addPostForm.getRawValue().post_text, 'post_visibility': this.addPostForm.getRawValue().post_visibility };
    console.log(data);
  }

}
