import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
	{
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: '../main/main.module#MainPageModule'
      },
			{
        path: 'profile',
				canActivate: [AuthGuard],
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
		  {
				path: 'context-list',
				canActivate: [AuthGuard],
				loadChildren: '../context-list/context-list.module#ContextListPageModule'
			},
			{
				path: 'context/:id',
				canActivate: [AuthGuard],
				loadChildren: '../context/context.module#ContextPageModule'
			},
			{
        path: 'posts',
				canActivate: [AuthGuard],
        loadChildren: '../posts/posts.module#PostsPageModule'
      },
		  { path: 'posts/:id',
				canActivate: [AuthGuard],
				loadChildren: '../postdetails/postdetails.module#PostdetailsPageModule'
			},
			{
        path: 'tabs',
				canActivate: [AuthGuard],
        loadChildren: '../tabs/tabs.module#TabsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
