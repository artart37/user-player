import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilKeyChanged,
  filter,
  Subject,
  takeUntil,
} from 'rxjs';

import {
  UserManagementQuery,
  UserManagementService,
} from '../../../data-access';
import { CreateUserFormModel } from '../models';
import { userNameValidator } from '../validators';
import { UmButtonComponent, UmModalService } from '../../../../shared/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'um-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UmButtonComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class UmCreateUserComponent implements OnDestroy, OnInit {
  private modalService = inject(UmModalService);
  private unsubscribeSubject = new Subject<void>();
  private userManagementService = inject(UserManagementService);
  private userManagementQuery = inject(UserManagementQuery);
  isUserUnique$ = this.userManagementQuery.selectIsUserUnique$;

  createUserForm = new FormGroup<CreateUserFormModel>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, userNameValidator(this.isUserUnique$)],
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

  ngOnInit(): void {
    this.createUserForm.valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject),
        debounceTime(300),
        distinctUntilKeyChanged('name'),
        filter((user) => !!user.name)
      )
      .subscribe(({ name }) =>
        this.userManagementService.validateUserNames(name as string)
      );
  }

  cancel() {
    this.modalService.close();
  }

  confirm() {
    const user = this.createUserForm.getRawValue();
    this.userManagementService.addUser(user);
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
