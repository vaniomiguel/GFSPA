import { CanActivateFn, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { inject } from '@angular/core';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
   return inject(HardcodedAuthenticationService).isUserLoggedIn() 
   ? true 
   : inject(Router).navigate(['login']);
};
