import { ModalAddPostPage } from './../modal-add-post/modal-add-post.page';
import { Component } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalCrtl: ModalController) {}

  async openModal(){
    let modal = await this.modalCrtl.create({
      component : ModalAddPostPage
    });

    return await modal.present();
  }
}