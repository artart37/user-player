import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  UmButtonComponent,
  UmModalComponent,
  UmTableComponent,
} from '../../../shared/ui';
import { UmCreateUserComponent } from '../../ui';
import { UserManagementPageComponent } from './user-management-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserManagementPageComponent],
  exports: [UserManagementPageComponent],
  imports: [
    CommonModule,
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
