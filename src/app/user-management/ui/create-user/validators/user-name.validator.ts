import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { UserManagementQuery } from '../../../data-access';

export const userNameValidator = (
  userManagementQuery: UserManagementQuery
): AsyncValidatorFn => {
  return (): Observable<ValidationErrors | null> => {
    return userManagementQuery.selectIsUserUnique$.pipe(
      map((isUnique) => {
        return isUnique ? null : { unique: true };
      }),
      catchError(() => of({ unique: true }))
    );
  };
};
