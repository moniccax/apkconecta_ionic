import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
var routes = [
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
                path: 'posts',
                canActivate: [AuthGuard],
                loadChildren: '../posts/posts.module#PostsPageModule'
            },
            {
                path: 'tabs',
                canActivate: [AuthGuard],
                loadChildren: '../tabs/tabs.module#TabsPageModule'
            }
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenuPage]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());
export { MenuPageModule };
//# sourceMappingURL=menu.module.js.map