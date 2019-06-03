import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var ModalAddPostPage = /** @class */ (function () {
    function ModalAddPostPage(modalCrtl) {
        this.modalCrtl = modalCrtl;
    }
    ModalAddPostPage.prototype.ngOnInit = function () {
    };
    ModalAddPostPage.prototype.closeModal = function () {
        this.modalCrtl.dismiss();
    };
    ModalAddPostPage.prototype.clickInputFile = function () {
        document.getElementById('post_img_input').click();
    };
    ModalAddPostPage.prototype.showImgName = function () {
        var img_input = document.getElementById('post_img_input');
        var img_files = img_input.files;
        for (var i = 0; i < img_files.length; i++) {
            document.getElementById('img_name').value = document.getElementById('img_name').value + img_files[i].name + '\n';
        }
    };
    ModalAddPostPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-add-post',
            templateUrl: './modal-add-post.page.html',
            styleUrls: ['./modal-add-post.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], ModalAddPostPage);
    return ModalAddPostPage;
}());
export { ModalAddPostPage };
//# sourceMappingURL=modal-add-post.page.js.map