import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-management',
    pathMatch: 'full',
  },
  {
    path: 'user-management',
    loadChildren: () =>
      import(
        './user-management/pages/user-management-page/user-management-page.module'
      ).then((m) => m.UserManagementPageModule),
  },
];
