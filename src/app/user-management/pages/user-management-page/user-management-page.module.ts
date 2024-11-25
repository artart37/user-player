import { NgModule } from '@angular/core';
import { UserManagementPageComponent } from './user-management-page.component';
import { UmButtonComponent } from '../../../shared/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserManagementPageComponent],
  exports: [UserManagementPageComponent],
  imports: [
    UmButtonComponent,
    RouterModule.forChild([
      {
        path: '',
        component: UserManagementPageComponent,
      },
    ]),
  ],
})
export class UserManagementPageModule {}
