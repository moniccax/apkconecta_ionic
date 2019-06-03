import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(imagePicker, formBuilder, crop, transfer, storage, file, toastController, loadingController, http, changeRef) {
        this.imagePicker = imagePicker;
        this.formBuilder = formBuilder;
        this.crop = crop;
        this.transfer = transfer;
        this.storage = storage;
        this.file = file;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.http = http;
        this.changeRef = changeRef;
        this.fileUrl = null;
        this.error_messages = {
            'cpf': [
                { type: 'required', message: 'CPF é necessário.' },
                { type: 'minlength', message: 'CPF inválido.' }
            ],
            'nome': [
                { type: 'required', message: 'Nome é necessário.' }
            ],
            'email': [
                { type: 'required', message: 'Email é necessário.' }
            ],
        };
        this.load = false;
        this.editProfileForm = this.formBuilder.group({
            cpf: new FormControl({ value: '', disabled: true }, Validators.compose([Validators.required, Validators.minLength(14)])),
            name: new FormControl({ value: '', disabled: true }, Validators.compose([Validators.required])),
            email: new FormControl('', Validators.compose([Validators.required]))
        });
        this.changePassword = this.formBuilder.group({
            password: new FormControl('', Validators.compose([Validators.required])),
            newPassword: new FormControl('', Validators.compose([Validators.required])),
            confirmNewPassword: new FormControl('', Validators.compose([Validators.required]))
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.profile = {
            profilepicpath: "",
            name: "",
            cpf: "",
            email: ""
        };
        this.updateProfilePic();
    };
    ProfilePage.prototype.submitEditProfile = function () {
        var data = { 'cpf': this.editProfileForm.getRawValue().cpf, 'name': this.editProfileForm.getRawValue().name, 'email': this.editProfileForm.value.email };
        console.log(data);
    };
    ProfilePage.prototype.submitChangePassword = function () {
        var data = { 'password': this.changePassword.value.password, 'newPassword': this.changePassword.value.newPassword, 'confirmNewPassword': this.changePassword.value.confirmNewPassword };
        console.log(data);
    };
    ProfilePage.prototype.cropUpload = function () {
        var _this = this;
        this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                _this.crop.crop(results[i], { quality: 100 })
                    .then(function (newImage) {
                    console.log('new image path is: ' + newImage);
                    _this.startUpload(newImage);
                }, function (error) { return console.error('Error cropping image', error); });
            }
        }, function (err) { console.log(err); });
    };
    ProfilePage.prototype.presentToast = function (text) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.startUpload = function (imgEntry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(imgEntry)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            _this.presentToast('Error while reading file.');
        });
    };
    ProfilePage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            _this.storage.get('token').then(function (val) {
                formData.append('file', imgBlob, "profile.png");
                formData.append('token', val);
                _this.uploadImageData(formData);
            });
        };
        reader.readAsArrayBuffer(file);
    };
    ProfilePage.prototype.uploadImageData = function (formData) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Uploading image...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.http.post("https://api.fundacaocefetminas.org.br/updateProfilePic", formData)
                            .toPromise()
                            .then(function (response) {
                            loading.dismiss();
                            console.log('API Response : ', response.json());
                            if (response.json().success) {
                                _this.presentToast('File upload complete.');
                                _this.updateProfilePic();
                            }
                            else {
                                _this.presentToast('File upload failed on server.');
                            }
                        })
                            .catch(function (error) {
                            loading.dismiss();
                            console.error('API Error : ', error.status);
                            console.error('API Error : ', JSON.stringify(error));
                            _this.presentToast('File upload failed.');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.updateProfilePic = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            if (token) {
                var data = { 'token': token };
                console.log(data);
                var headers = new Headers({
                    'Content-Type': 'application/json'
                });
                var options = new RequestOptions({ headers: headers });
                _this.http.post('https://api.fundacaocefetminas.org.br/getProfileInfo', data, options)
                    .toPromise()
                    .then(function (response) {
                    if (response.json().success) {
                        console.log(response.json());
                        _this.profile.name = response.json().name;
                        _this.editProfileForm.controls['name'].setValue(_this.profile.name);
                        _this.profile.cpf = response.json().cpf;
                        _this.editProfileForm.controls['cpf'].setValue(_this.profile.cpf);
                        _this.profile.email = response.json().email;
                        _this.editProfileForm.controls['email'].setValue(_this.profile.email);
                        _this.profile.profilepicpath = response.json().profilepicpath + "?" + new Date().getTime();
                        _this.load = true;
                        _this.changeRef.detectChanges();
                    }
                    else {
                        _this.updateProfilePic();
                    }
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                });
            }
        });
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ImagePicker,
            FormBuilder,
            Crop,
            FileTransfer,
            Storage,
            File,
            ToastController,
            LoadingController,
            Http,
            ChangeDetectorRef])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map