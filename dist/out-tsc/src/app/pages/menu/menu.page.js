import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
var MenuPage = /** @class */ (function () {
    function MenuPage(iab, storage, router, events, authService) {
        this.iab = iab;
        this.storage = storage;
        this.router = router;
        this.events = events;
        this.authService = authService;
        this.out_pages = [
            {
                title: 'Sistemas de Informação FCM',
                url: '/menu/main',
                external: false,
                icon: 'home'
            },
            {
                title: 'Institucional',
                children: [
                    {
                        title: 'A FCM',
                        url: 'http://fundacaocefetminas.org.br',
                        external: true
                    },
                    {
                        title: 'Empresas Instituidoras',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                    {
                        title: 'Gestão 2017-2021',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                    {
                        title: 'Apoio ao CEFET-MG',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                    {
                        title: 'Estatuto',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                    {
                        title: 'Relatório de Gestão',
                        url: 'http://fcmidiomas.com.br',
                        external: true
                    },
                ]
            }
        ];
        this.logged_pages = [
            {
                title: 'Perfil',
                url: '/menu/profile',
                external: false,
                icon: 'person'
            },
            {
                title: 'Notificações',
                url: '/menu/tabs',
                external: false,
                icon: 'notifications'
            },
            {
                title: 'Configurações',
                url: '/menu/posts',
                external: false,
                icon: 'settings'
            },
            {
                title: 'Sair',
                url: '/menu/main',
                click: true,
                external: false,
                icon: 'power'
            }
        ];
        this.pages = [];
    }
    MenuPage.prototype.logout = function () {
        this.authService.logout();
    };
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe('login', function (data) {
            _this.logged = true;
        });
        this.events.subscribe('logout', function (data) {
            _this.logged = false;
        });
    };
    MenuPage.prototype.OpenUrl = function (Url, myEvent) {
        var browser = this.iab.create(Url);
        browser.show();
    };
    MenuPage = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.page.html',
            styleUrls: ['./menu.page.scss'],
            providers: [InAppBrowser]
        }),
        tslib_1.__metadata("design:paramtypes", [InAppBrowser, Storage, Router, Events, AuthenticationService])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.page.js.map