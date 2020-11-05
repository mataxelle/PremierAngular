import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable() // Permet d'injcter un autre Service
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate( // A l'intérieur de cette méthode on observe l'état d'auth dans AuthService
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        if (this.authService.isAuth) {
            return true;
        } else {
            this.router.navigate(['/auth']); // redirection vers la page Auth
        }
    }
}