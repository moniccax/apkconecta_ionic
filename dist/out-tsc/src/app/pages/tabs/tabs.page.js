import * as tslib_1 from "tslib";
import { ModalAddPostPage } from './../modal-add-post/modal-add-post.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var TabsPage = /** @class */ (function () {
    function TabsPage(modalCrtl) {
        this.modalCrtl = modalCrtl;
    }
    TabsPage.prototype.openModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCrtl.create({
                            component: ModalAddPostPage
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TabsPage = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: 'tabs.page.html',
            styleUrls: ['tabs.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map