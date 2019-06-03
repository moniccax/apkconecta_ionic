import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthenticationService } from './../../services/authentication.service';
var PostsPage = /** @class */ (function () {
    function PostsPage(storage, http, authService) {
        this.storage = storage;
        this.http = http;
        this.authService = authService;
        this.sliderConfig = {
            autoHeight: true
        };
        this.load = false;
    }
    PostsPage.prototype.ionViewWillEnter = function () {
        this.showPosts();
    };
    PostsPage.prototype.ngOnInit = function () { };
    PostsPage.prototype.showPosts = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            if (token) {
                var data = { 'token': token };
                var headers = new Headers({
                    'Content-Type': 'application/json'
                });
                var options = new RequestOptions({ headers: headers });
                _this.http.post('https://api.fundacaocefetminas.org.br/getPosts', data, options)
                    .toPromise()
                    .then(function (response) {
                    if (response.json().success) {
                        _this.posts = response.json().posts;
                        _this.contexts = response.json().contexts;
                        _this.load = true;
                    }
                    else {
                        _this.authService.reload_token().then(function (res) {
                            _this.showPosts();
                        }).catch(function (error) {
                        });
                    }
                });
            }
        });
    };
    PostsPage = tslib_1.__decorate([
        Component({
            selector: 'app-posts',
            templateUrl: './posts.page.html',
            styleUrls: ['./posts.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Storage, Http, AuthenticationService])
    ], PostsPage);
    return PostsPage;
}());
export { PostsPage };
//# sourceMappingURL=posts.page.js.map