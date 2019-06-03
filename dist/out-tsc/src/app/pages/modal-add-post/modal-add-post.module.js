import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalAddPostPage } from './modal-add-post.page';
var routes = [
    {
        path: '',
        component: ModalAddPostPage
    }
];
var ModalAddPostPageModule = /** @class */ (function () {
    function ModalAddPostPageModule() {
    }
    ModalAddPostPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalAddPostPage]
        })
    ], ModalAddPostPageModule);
    return ModalAddPostPageModule;
}());
export { ModalAddPostPageModule };
//# sourceMappingURL=modal-add-post.module.js.map