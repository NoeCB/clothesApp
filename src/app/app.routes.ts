import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    // OJO a la ruta de importación aquí:
    loadComponent: () => import('./pages/users/users.page').then(m => m.UsersPage),
  },
];