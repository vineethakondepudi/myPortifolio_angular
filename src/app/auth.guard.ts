import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const isAuthenticated = !!localStorage.getItem('isAuthenticated');

  if(!isAuthenticated){
router.navigate(["/"]);
return false;
  }
  return true;
};
