import { NgModule } from '@angular/core';
import { UserManagementPageComponent } from './user-management-page.component';
import { UmButtonComponent, UmTableComponent } from '../../../shared/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserManagementPageComponent],
  exports: [UserManagementPageComponent],
  imports: [
    UmButtonComponent,
    UmTableComponent,
    RouterModule.forChild([
      {
        path: '',
        component: UserManagementPageComponent,
      },
    ]),
  ],
})
export class UserManagementPageModule {}
