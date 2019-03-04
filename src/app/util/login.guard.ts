import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class LoginGuard implements CanActivate {
    
    canActivate() {
        let logged: boolean = Math.random() < 0.5;
        if (!logged) {
            console.log('用户未登录');
        }
        return logged;
    }
}