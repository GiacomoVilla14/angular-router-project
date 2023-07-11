import {inject, Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate, CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

/*@Injectable({
  providedIn: 'root',
})*/
/*export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated().then((authenticated) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}*/
export const myCanActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router)
  const authService = inject(AuthService)
  return authService.isAuthenticated().then((authenticated) => {
    if (authenticated) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  });
}
