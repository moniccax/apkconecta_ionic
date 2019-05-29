import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  sliderConfig = {
    autoHeight: true
  };

  constructor() { }

  ngOnInit() {
  }

}
