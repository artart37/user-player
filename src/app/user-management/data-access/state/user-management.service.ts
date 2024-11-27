import { inject, Injectable } from '@angular/core';
import { UserManagementStore } from './user-management.store';
import { UmUser } from '../../models';
import { guid } from '@datorama/akita';
import { UserManagementQuery } from './user-management.query';

@Injectable({ providedIn: 'root' })
export class UserManagementService {
  private userManagementStore = inject(UserManagementStore);
  private userManagementQuery = inject(UserManagementQuery);

  addUser(user: Omit<UmUser, 'id'>): void {
    this.userManagementStore.setLoading(true);
    this.userManagementStore.add({ ...user, id: guid() });
    this.userManagementStore.setLoading(false);
  }

  validateUserNames(name: string): void {
    const isUserUnique = this.userManagementQuery
      .getAll()
      .every((user) => user.name === name);

    this.userManagementStore.update({ isUserUnique });
  }
}
