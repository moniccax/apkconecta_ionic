import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';
import { MainPage } from './main.page';
var routes = [
    {
        path: '',
        component: MainPage
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                BrMaskerModule
            ],
            declarations: [MainPage]
        })
    ], MainPageModule);
    return MainPageModule;
}());
export { MainPageModule };
//# sourceMappingURL=main.module.js.map