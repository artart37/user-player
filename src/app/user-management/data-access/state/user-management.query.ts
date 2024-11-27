import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map, Observable } from 'rxjs';

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
    this.selectUsers$ = this.selectAll();
    this.selectCanUsersBeAdded$ = this.selectUsers$.pipe(
      map((users) => users?.length < 5 && users.every(({ active }) => !!active))
    );
    this.selectIsUserUnique$ = this.select((state) => state.isUserUnique);
  }
}
