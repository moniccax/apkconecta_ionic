import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        canActivate: [AuthGuard],
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: 'posts',
                children: [
                    {
                        path: '',
                        canActivate: [AuthGuard],
                        loadChildren: '../posts/posts.module#PostsPageModule'
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
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs-routing.module.js.map