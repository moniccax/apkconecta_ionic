import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService,
							private router: Router) {}

  canActivate(): boolean {
    if(this.auth.isAuthenticated()){
			return true;
		}
		else{
			this.router.navigate(['/']);
			return false;
		}
  }
}
