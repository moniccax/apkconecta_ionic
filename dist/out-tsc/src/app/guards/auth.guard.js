import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService,
            Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map