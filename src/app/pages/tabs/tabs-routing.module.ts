import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:
      [
        {
          path: 'profile',
          children:
            [
              {
                path: '',
								canActivate: [AuthGuard],
                loadChildren: '../profile/profile.module#ProfilePageModule'
              }
            ]
        },
        {
          path: 'posts',
          children:
            [
              {
                path: '',
								canActivate: [AuthGuard],
                loadChildren:'../posts/posts.module#PostsPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/menu/tabs/posts'
        }
      ]
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}
