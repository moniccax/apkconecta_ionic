import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../guards/auth.guard';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { ModalAddPostPage } from '../modal-add-post/modal-add-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
		TabsPageRoutingModule
  ],
  declarations: [TabsPage, ModalAddPostPage],
  entryComponents : [ModalAddPostPage],
})
export class TabsPageModule {}
