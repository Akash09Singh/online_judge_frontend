import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { LoginService } from './login_service/login.service';

export const userGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  const userdata = loginService.getUser();
  if (
    loginService.isLoggedin() &&
    userdata.authorities.includes('USER') &&
    !userdata.authorities.includes('ADMIN')
  ) {
    return true;
  }
  router.navigate(['login']);
  return false;
};
