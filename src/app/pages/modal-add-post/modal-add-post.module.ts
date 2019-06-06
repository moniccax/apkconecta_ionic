import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  declarations: [ModalAddPostPage]
})
export class ModalAddPostPageModule {}