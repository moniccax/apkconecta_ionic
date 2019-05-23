import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-post',
  templateUrl: './modal-add-post.page.html',
  styleUrls: ['./modal-add-post.page.scss'],
})
export class ModalAddPostPage implements OnInit {

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
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

}
