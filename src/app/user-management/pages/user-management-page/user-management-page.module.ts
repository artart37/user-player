import { NgModule } from '@angular/core';
import { UserManagementPageComponent } from './user-management-page.component';
import {
  UmButtonComponent,
  UmModalComponent,
  UmTableComponent,
} from '../../../shared/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserManagementPageComponent],
  exports: [UserManagementPageComponent],
  imports: [
    UmButtonComponent,
    UmTableComponent,
    UmModalComponent,
    RouterModule.forChild([
      {
        path: '',
        component: UserManagementPageComponent,
      },
    ]),
  ],
})
export class UserManagementPageModule {}
