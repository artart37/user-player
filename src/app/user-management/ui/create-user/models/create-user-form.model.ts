import { FormControl } from '@angular/forms';

export interface CreateUserFormModel {
  name: FormControl<string>;
  active: FormControl<boolean>;
}
