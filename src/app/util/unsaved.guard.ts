import { CanDeactivate } from '@angular/router';
import { GuardComponent } from '../guard/guard.component';

export class UnsavedGuard implements CanDeactivate<GuardComponent> {
    canDeactivate(component: GuardComponent) {
        return window.confirm('确定要离开吗?');
    }
}