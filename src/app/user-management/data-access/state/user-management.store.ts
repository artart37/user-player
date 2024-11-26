import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { INITIAL_USER_ENTITIES } from '../constants';
import { UmUser } from '../../models';
import { Injectable } from '@angular/core';

export interface UserManagementState extends EntityState<UmUser, string> {
  users: UmUser[];
  isUserUnique: boolean;
}

export const initialUserManagementState = {
  users: INITIAL_USER_ENTITIES,
  isUserUnique: false,
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'user-management' })
export class UserManagementStore extends EntityStore<UserManagementState> {
  constructor() {
    super(initialUserManagementState);
    this.set(INITIAL_USER_ENTITIES);
  }
}
