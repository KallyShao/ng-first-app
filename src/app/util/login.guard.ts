import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class LoginGuard implements CanActivate {
    
    CanActivate() {
        let logged: boolean = Math.random() < 0.5;
        if (!logged) {
            console.log('用户未登录');
        }
        return logged;
    }
}