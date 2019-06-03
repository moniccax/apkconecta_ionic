import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PostsPage } from './posts.page';
var routes = [
    {
        path: '',
        component: PostsPage
    }
];
var PostsPageModule = /** @class */ (function () {
    function PostsPageModule() {
    }
    PostsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PostsPage]
        })
    ], PostsPageModule);
    return PostsPageModule;
}());
export { PostsPageModule };
//# sourceMappingURL=posts.module.js.map