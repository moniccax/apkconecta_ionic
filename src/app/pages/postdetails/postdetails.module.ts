import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostdetailsPage } from './postdetails.page';
import { ModalEditCommentPage } from '../modal-edit-comment/modal-edit-comment.page';
import { ModalAnswerCommentPage } from '../modal-answer-comment/modal-answer-comment.page';
const routes: Routes = [
  {
    path: '',
    component: PostdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
		ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostdetailsPage, ModalEditCommentPage,ModalAnswerCommentPage],
  entryComponents : [ModalEditCommentPage,ModalAnswerCommentPage]
})
export class PostdetailsPageModule {}
