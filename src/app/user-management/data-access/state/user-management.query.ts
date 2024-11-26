import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { delay, Observable } from 'rxjs';

import { UmUser } from '../../models';
import {
  UserManagementState,
  UserManagementStore,
} from './user-management.store';

@Injectable({
  providedIn: 'root',
})
export class UserManagementQuery extends QueryEntity<UserManagementState> {
  selectUsers$: Observable<UmUser[]>;
  selectIsUserUnique$: Observable<boolean>;

  constructor(protected override store: UserManagementStore) {
    super(store);
    this.selectUsers$ = this.select((state) => state.users);
    this.selectIsUserUnique$ = this.select((state) => state.isUserUnique).pipe(
      delay(1000)
    );
  }
}
