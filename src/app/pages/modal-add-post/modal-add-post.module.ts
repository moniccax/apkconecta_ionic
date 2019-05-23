import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalAddPostPage } from './modal-add-post.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddPostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalAddPostPage]
})
export class ModalAddPostPageModule {}
