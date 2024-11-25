import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  UmButtonComponent,
  UmModalComponent,
  UmTableComponent,
} from '../../../shared/ui';
import { UmCreateUserComponent } from '../../ui';
import { UserManagementPageComponent } from './user-management-page.component';

@NgModule({
  declarations: [UserManagementPageComponent],
  exports: [UserManagementPageComponent],
  imports: [
    UmButtonComponent,
    UmTableComponent,
    UmModalComponent,
    UmCreateUserComponent,
    RouterModule.forChild([
      {
        path: '',
        component: UserManagementPageComponent,
      },
    ]),
  ],
})
export class UserManagementPageModule {}
