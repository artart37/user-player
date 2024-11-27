import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  switchMap,
  take,
} from 'rxjs';

import { UserManagementService } from './../../../data-access/state/user-management.service';

export const userNameValidator = (
  userManagementService: UserManagementService
): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }

    return control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => userManagementService.checkUserNameValidity(value)),
      map((isUserUnique) => !isUserUnique),
      map((hasDuplicateNames) => {
        return hasDuplicateNames ? { unique: true } : null;
      }),
      take(1),
      catchError(() => of(null))
    );
  };
};
