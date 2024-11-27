import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { UmButtonComponent, UmModalService } from '../../../../shared/ui';
import { UserManagementService } from '../../../data-access';
import { CreateUserFormModel } from '../models';
import { userNameValidator } from '../validators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'um-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UmButtonComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class UmCreateUserComponent {
  private modalService = inject(UmModalService);
  private userManagementService = inject(UserManagementService);

  createUserForm = new FormGroup<CreateUserFormModel>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
      asyncValidators: userNameValidator(this.userManagementService),
    }),
    active: new FormControl(false, {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  get name() {
    return this.createUserForm.get('name');
  }

  get active() {
    return this.createUserForm.get('active');
  }

  get isFormValid() {
    return this.createUserForm.valid;
  }

  cancel() {
    this.modalService.close();
  }

  confirm() {
    const user = this.createUserForm.getRawValue();
    console.log(user);
    this.userManagementService.addUser(user);
    this.modalService.close();
  }
}
