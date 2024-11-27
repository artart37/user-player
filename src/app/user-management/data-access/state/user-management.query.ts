import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';

import { UmUser } from '../../models';
import {
  UserManagementState,
  UserManagementStore,
} from './user-management.store';

@Injectable({
  providedIn: 'root',
})
export class UserManagementQuery extends QueryEntity<UserManagementState> {
  selectCanUsersBeAdded$: Observable<boolean>;
  selectUsers$: Observable<UmUser[]>;
  selectIsUserUnique$: Observable<boolean>;

  constructor(protected override store: UserManagementStore) {
    super(store);
    this.selectCanUsersBeAdded$ = this.select(
      (state) =>
        state.users?.length < 5 && state.users.every(({ active }) => !!active)
    );
    this.selectUsers$ = this.select((state) => state.users);
    this.selectIsUserUnique$ = this.select((state) => state.isUserUnique);
  }
}
