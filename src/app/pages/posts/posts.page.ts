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

  constructor() {
	}
  ngOnInit() {
		let shand=document.getElementsByClassName('context-button') as HTMLCollectionOf<HTMLElement>;
		if (shand.length != 0) {
			shand[0].style.setProperty('--background', shand[0].style.getPropertyValue('background'));
		}
	}

}
