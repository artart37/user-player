import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';

export const userNameValidator = (
  isUserUnique$: Observable<boolean>
): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return isUserUnique$.pipe(
      map((isUnique) => {
        console.log(isUnique);
        return isUnique ? null : { unique: true };
      }),
      catchError(() => of({ unique: true }))
    );
  };
};
