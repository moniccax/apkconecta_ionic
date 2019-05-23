(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/br-mask/dist/app.module.js":
/*!*************************************************!*\
  !*** ./node_modules/br-mask/dist/app.module.js ***!
  \*************************************************/
/*! exports provided: BrMaskerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskerModule", function() { return BrMaskerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/br-mask */ "./node_modules/br-mask/dist/directives/br-mask.js");



var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
    return BrMaskerModule;
}());

BrMaskerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]
                ],
                exports: [
                    _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            },] },
];
/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./node_modules/br-mask/dist/directives/br-mask.js":
/*!*********************************************************!*\
  !*** ./node_modules/br-mask/dist/directives/br-mask.js ***!
  \*********************************************************/
/*! exports provided: BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return BrMaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return BrMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
        this.moneyInitHasInt = true;
    }
    return BrMaskModel;
}());

var BrMaskDirective = (function () {
    function BrMaskDirective() {
        this.brmasker = new BrMaskModel();
    }
    /**
    * Event key up in directive
    * @author Antonio Marques <tmowna@gmail.com>
    * @constant {string} value
    */
    BrMaskDirective.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.setValueInFormControl(value);
    };
    BrMaskDirective.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (this.brmasker.moneyInitHasInt === undefined) {
            this.brmasker.moneyInitHasInt = true;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
        this.initialValue();
    };
    BrMaskDirective.prototype.initialValue = function () {
        var value = this.returnValue(this.brmasker.form.value);
        this.setValueInFormControl(value);
    };
    /**
    * The verification of form
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.verifyFormControl()</caption>
    * @returns {boolean} return a boolean value
    */
    BrMaskDirective.prototype.verifyFormControl = function () {
        if (this.brmasker.form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
    * Set Value em FormControl
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string)</caption>
    */
    BrMaskDirective.prototype.setValueInFormControl = function (value) {
        if (!this.verifyFormControl()) {
            return;
        }
        this.brmasker.form.setValue(value);
        this.brmasker.form.updateValueAndValidity();
    };
    /**
    * For initial value
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.phoneNotDDD) {
            return this.phoneNotDDDMask(value);
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (this.brmasker.userCaracters) {
            return this.usingSpecialCharacters(value, this.brmasker.mask, this.brmasker.len);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    /**
    * For initial value percent
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePercent(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    /**
    * For initial value person
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePerson(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    /**
    * For initial value money
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValueMoney(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    /**
    * Here is one of the main functions
    * responsible for identifying the type of mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.returnValue(string)</caption>
    * @param {string} value
    * @returns {string} mask value
    */
    BrMaskDirective.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var formValue = value;
            if (this.brmasker.type === 'alfa') {
                formValue = formValue.replace(/\d/gi, '');
            }
            if (this.brmasker.type === 'num') {
                formValue = formValue.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(formValue), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(formValue);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(formValue);
            }
            if (this.brmasker.person) {
                return this.peapollMask(formValue);
            }
            if (this.brmasker.percent) {
                return this.percentMask(formValue);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(formValue);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(formValue, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(formValue);
        }
        else {
            return '';
        }
    };
    /**
    * Here we have a mask for percentage
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.percentMask(string)</caption>
    * @param {string} value
    * @returns {string} string percentage
    */
    BrMaskDirective.prototype.percentMask = function (value) {
        var tmp = value;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    /**
    * Here we have a mask for phone in 8 digits or 9 digits
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    BrMaskDirective.prototype.phoneMask = function (value) {
        var formValue = value;
        if (formValue.length > 14) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for phone in 8 digits or 9 digits not ddd
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    BrMaskDirective.prototype.phoneNotDDDMask = function (value) {
        var formValue = value;
        if (formValue.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for peapoll ID
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.peapollMask(string)</caption>
    * @param {string} value
    * @returns {string} string ID
    */
    BrMaskDirective.prototype.peapollMask = function (value) {
        var formValue = value;
        if (formValue.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1/$2');
            formValue = formValue.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            formValue = formValue.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for money mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.moneyMask(string)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} string money
    */
    BrMaskDirective.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp('([0-9]{' + decimal + '})$', 'g'), config.decimalCaracter + '$1');
        if (value.length === 1 && !this.brmasker.moneyInitHasInt) {
            var dec = Array(decimal - 1).fill(0);
            return "0" + config.decimalCaracter + dec.join('') + value;
        }
        if (value.length === decimal + 1) {
            return '0' + value;
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1);
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            var valueOne = "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
            value = value.replace(new RegExp("" + valueOne, "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            var valueTwo = "([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
            value = value.replace(new RegExp("" + valueTwo, "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    /**
    * Responsible for returning the empty mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.onInput(string)</caption>
    * @param {string} value
    * @returns {string} value
    */
    BrMaskDirective.prototype.onInput = function (value) {
        return this.formatField(value, this.brmasker.mask, this.brmasker.len);
    };
    /**
    * Responsible for special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.usingSpecialCharacters(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    BrMaskDirective.prototype.usingSpecialCharacters = function (field, mask, size) {
        if (!size) {
            size = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = field.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var sizeMascara = campoSoNumeros.length;
        for (var i = 0; i < sizeMascara; i++) {
            if (i < size) {
                boleanoMascara = ((mask.charAt(i) === '-') || (mask.charAt(i) === '.') || (mask.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    sizeMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    /**
    * Responsible formating number
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.thousand(string)</caption>
    * @param {string} value
    */
    BrMaskDirective.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
    };
    /**
    * Responsible for removing special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.formatField(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    BrMaskDirective.prototype.formatField = function (field, mask, size) {
        if (!size) {
            size = 99999999999;
        }
        var boleanoMascara;
        var exp = /\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = field.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < size) {
                boleanoMascara = (mask.charAt(i) === '-') || (mask.charAt(i) === '.') || (mask.charAt(i) === '/');
                boleanoMascara = boleanoMascara || mask.charAt(i) === '_';
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '(') || (mask.charAt(i) === ')') || (mask.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === ',') || (mask.charAt(i) === '*') || (mask.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '@') || (mask.charAt(i) === '#') || (mask.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '$') || (mask.charAt(i) === '&') || (mask.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskDirective;
}());

BrMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[brmasker]'
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
BrMaskDirective.ctorParameters = function () { return []; };
BrMaskDirective.propDecorators = {
    'brmasker': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputKeyup': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] },],
};
//# sourceMappingURL=br-mask.js.map

/***/ }),

/***/ "./node_modules/br-mask/dist/directives/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/br-mask/dist/directives/index.js ***!
  \*******************************************************/
/*! exports provided: BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _br_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./br-mask */ "./node_modules/br-mask/dist/directives/br-mask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return _br_mask__WEBPACK_IMPORTED_MODULE_0__["BrMaskModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return _br_mask__WEBPACK_IMPORTED_MODULE_0__["BrMaskDirective"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/br-mask/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/br-mask/dist/index.js ***!
  \********************************************/
/*! exports provided: BrMaskerModule, BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ "./node_modules/br-mask/dist/app.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskerModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_0__["BrMaskerModule"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ "./node_modules/br-mask/dist/directives/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["BrMaskModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["BrMaskDirective"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");








var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_7__["MainPage"]
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                br_mask__WEBPACK_IMPORTED_MODULE_6__["BrMaskerModule"]
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_7__["MainPage"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/pages/main/main.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n\t\t<ion-title>\n\t\t\t<ion-img cache=\"true\" src=\"/assets/images/logo_fcm.png\" class=\"logo-position\"></ion-img>\n\t\t</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"loginForm\" #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Login</h3>\n          </div>\n          <div padding>\n            <ion-item>\n\t\t\t\t\t\t\t<ion-label position=\"floating\">CPF:</ion-label>\n              <ion-input formControlName=\"cpf\" name=\"cpf\" type=\"text\" [brmasker]=\"{form: loginForm.get('cpf'), mask: '999.999.999-99'}\" required></ion-input>\n            </ion-item>\n\t\t\t\t\t\t<ng-container *ngFor=\"let error of error_messages.cpf\">\n\t\t\t\t\t\t\t<div class=\"error-messages\" *ngIf=\"loginForm.get('cpf').hasError(error.type) && (loginForm.get('cpf').dirty || loginForm.get('cpf').touched)\">\n\t\t\t\t\t\t\t\t{{error.message}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n            <ion-item>\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Senha:</ion-label>\n              <ion-input formControlName=\"password\" name=\"password\" type=\"password\" required></ion-input>\n            </ion-item>\n\t\t\t\t\t\t<ng-container *ngFor=\"let error of error_messages.password\">\n\t\t\t\t\t\t\t<div class=\"error-messages\" *ngIf=\"loginForm.get('password').hasError(error.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n\t\t\t\t\t\t\t\t{{error.message}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n          </div>\n          <div padding>\n            <ion-button type=\"submit\" [disabled]=\"!loginForm.valid\" expand=\"block\">Login <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon> </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/main/main.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-messages {\n  font-size: 0.7em;\n  color: red;\n  text-align: center; }\n\n.logo-position {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  width: 80px;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmllbC9pb25pYy9pb25pYy1hcHAvc3JjL2FwcC9wYWdlcy9tYWluL21haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCO0VBQ2hCLFVBQVM7RUFDVCxrQkFBa0IsRUFBQTs7QUFJbkI7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlc3tcblx0Zm9udC1zaXplOiAwLjdlbTtcblx0Y29sb3I6cmVkO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmxvZ28tcG9zaXRpb24ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdHdpZHRoOjgwcHg7XG5cdGhlaWdodDoxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main/main.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");








var MainPage = /** @class */ (function () {
    function MainPage(formBuilder, http, router, storage, events, authService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.events = events;
        this.authService = authService;
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
            cpf: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(14)])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
    }
    MainPage.prototype.login = function () {
        var data = { 'cpf': this.loginForm.value.cpf, 'password': this.loginForm.value.password };
        this.authService.login(data);
    };
    MainPage.prototype.ngOnInit = function () {
    };
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.page.html */ "./src/app/pages/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map