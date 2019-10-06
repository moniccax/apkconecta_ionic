import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormsubmitService } from './../../services/formsubmit.service';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})

export class PostsPage implements OnInit {

  sliderConfig = {
    autoHeight: true,
  };

  posts: any;
  contexts: any;

  constructor(private storage: Storage, private formService: FormsubmitService, private authService: AuthenticationService) {
  }

  ionViewWillEnter() {
    this.showPosts();
  }

  ngOnInit() { }

  showPosts() {
    this.storage.get('token').then(token => {
      if (token) {
        const data = {'token': token };
        this.formService.postSubmit('https://api.fundacaocefetminas.org.br/getPosts', data).subscribe(
          res => {
            if (res['success']) {
              this.posts = res['posts'];
              this.contexts = res['contexts'];
            }
          },
          err => {

          }
        );
      }
    });
  }
}
