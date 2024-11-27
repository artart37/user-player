import { AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of, take } from 'rxjs';

export const userNameValidator = (
  isUserUnique$: Observable<boolean>
): AsyncValidatorFn => {
  return (): Observable<ValidationErrors | null> => {
    return isUserUnique$.pipe(
      take(1),
      map((isUnique) => {
        return isUnique ? null : { unique: true };
      }),
      catchError(() => of({ unique: true }))
    );
  };
};
