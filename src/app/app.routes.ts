import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    // TODO: Protect Path and only enable with appropriate uuid.
    path: 'otpconfirm',
    loadComponent: () => import('./otpconfirm/otpconfirm.page').then( m => m.OtpconfirmPage)
  },

];
