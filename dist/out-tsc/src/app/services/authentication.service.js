import * as tslib_1 from "tslib";
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Events } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
var TOKEN_KEY = 'token';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, storage, plt, events, toastController, router) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.plt = plt;
        this.events = events;
        this.toastController = toastController;
        this.router = router;
        this.authenticationState = new BehaviorSubject(false);
        this.plt.ready().then(function () {
            _this.checkToken();
        });
    }
    AuthenticationService.prototype.checkToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('cpf').then(function (res) {
                if (res) {
                    _this.cpf = res;
                    _this.storage.get('password').then(function (resPassword) {
                        if (resPassword) {
                            _this.password = resPassword;
                            var data = { 'cpf': _this.cpf, 'password': _this.password };
                            _this.login(data);
                            resolve('success');
                        }
                        else {
                            _this.authenticationState.next(false);
                            reject(new Error("login failed"));
                        }
                    });
                }
                else {
                    _this.authenticationState.next(false);
                    reject(new Error("login failed"));
                }
            });
        });
    };
    AuthenticationService.prototype.presentSuccessToast = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Bem vindo(a) ' + name.split(' ')[0] + "!",
                            duration: 2000,
                            color: 'success'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService.prototype.presentFailedToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "CPF ou senha incorretos!",
                            duration: 2000,
                            color: 'danger'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService.prototype.presentErrorToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Não foi possivel se conectar ao servidor!",
                            duration: 2000,
                            color: 'danger'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService.prototype.reload_token = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('cpf').then(function (res) {
                if (res) {
                    _this.cpf = res;
                    _this.storage.get('password').then(function (resPassword) {
                        if (resPassword) {
                            _this.password = resPassword;
                            var data = { 'cpf': _this.cpf, 'password': _this.password };
                            _this.relogin(data);
                            resolve('success');
                        }
                        else {
                            _this.authenticationState.next(false);
                            reject(new Error("login failed"));
                        }
                    });
                }
                else {
                    _this.authenticationState.next(false);
                    reject(new Error("login failed"));
                }
            });
        });
    };
    AuthenticationService.prototype.relogin = function (data) {
        var _this = this;
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        var options = new RequestOptions({ headers: headers });
        this.http.post('https://api.fundacaocefetminas.org.br/login', data, options)
            .toPromise()
            .then(function (response) {
            console.log('API Response : ', response.json());
            if (response.json().success) {
                console.log('Token : ', response.json().token);
                _this.storage.set('cpf', data.cpf);
                _this.storage.set('password', data.password);
                _this.storage.set('name', response.json().nome);
                _this.storage.set('token', response.json().token);
                _this.storage.set('logged', true);
                _this.storage.set(TOKEN_KEY, response.json().token).then(function () {
                    _this.authenticationState.next(true);
                });
            }
            else {
                _this.presentFailedToast();
            }
        })
            .catch(function (error) {
            console.error('API Error : ', error.status);
            console.error('API Error : ', JSON.stringify(error));
            _this.presentErrorToast();
        });
    };
    AuthenticationService.prototype.login = function (data) {
        var _this = this;
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        var options = new RequestOptions({ headers: headers });
        this.http.post('https://api.fundacaocefetminas.org.br/login', data, options)
            .toPromise()
            .then(function (response) {
            console.log('API Response : ', response.json());
            if (response.json().success) {
                console.log('Token : ', response.json().token);
                _this.storage.set('cpf', data.cpf);
                _this.storage.set('password', data.password);
                _this.storage.set('name', response.json().nome);
                _this.storage.set('token', response.json().token);
                _this.storage.set('logged', true);
                _this.presentSuccessToast(response.json().nome);
                _this.storage.set(TOKEN_KEY, response.json().token).then(function () {
                    _this.events.publish('login');
                    _this.authenticationState.next(true);
                    _this.router.navigateByUrl('/menu/tabs');
                });
            }
            else {
                _this.presentFailedToast();
            }
        })
            .catch(function (error) {
            console.error('API Error : ', error.status);
            console.error('API Error : ', JSON.stringify(error));
            _this.presentErrorToast();
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        this.storage.set('logged', false);
        this.storage.remove('cpf');
        this.storage.remove('password');
        this.storage.remove('name');
        return this.storage.remove(TOKEN_KEY).then(function () {
            _this.events.publish('logout');
            _this.authenticationState.next(false);
        });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.authenticationState.value;
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http,
            Storage,
            Platform,
            Events,
            ToastController,
            Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map