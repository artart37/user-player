import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateUserFormModel } from '../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'um-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class UmCreateUserComponent {
  createUserForm = new FormGroup<CreateUserFormModel>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
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
}
