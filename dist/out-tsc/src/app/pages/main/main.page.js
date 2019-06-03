import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Events, LoadingController } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
var MainPage = /** @class */ (function () {
    function MainPage(formBuilder, http, router, storage, events, authService, loadingController) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.events = events;
        this.authService = authService;
        this.loadingController = loadingController;
        this.error_messages = {
            'cpf': [
                { type: 'required', message: 'CPF é necessário.' },
                { type: 'minlength', message: 'CPF inválido.' }
            ],
            'password': [
                { type: 'required', message: 'Senha é necessário.' }
            ],
        };
        this.loginForm = this.formBuilder.group({
            cpf: new FormControl('', Validators.compose([Validators.required, Validators.minLength(14)])),
            password: new FormControl('', Validators.compose([Validators.required]))
        });
    }
    MainPage.prototype.login = function () {
        var data = { 'cpf': this.loginForm.value.cpf, 'password': this.loginForm.value.password };
        this.authService.login(data);
    };
    MainPage.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.authService.checkToken().then(function (res) {
                            loading.dismiss();
                        }).catch(function (error) {
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MainPage = tslib_1.__decorate([
        Component({
            selector: 'app-main',
            templateUrl: './main.page.html',
            styleUrls: ['./main.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Http,
            Router,
            Storage,
            Events,
            AuthenticationService,
            LoadingController])
    ], MainPage);
    return MainPage;
}());
export { MainPage };
//# sourceMappingURL=main.page.js.map