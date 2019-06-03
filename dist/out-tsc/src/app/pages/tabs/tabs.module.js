import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { ModalAddPostPage } from '../modal-add-post/modal-add-post.page';
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                TabsPageRoutingModule
            ],
            declarations: [TabsPage, ModalAddPostPage],
            entryComponents: [ModalAddPostPage],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map