import { inject, Injectable } from '@angular/core';
import { UserManagementStore } from './user-management.store';
import { UmUser } from '../../models';
import { guid } from '@datorama/akita';
import { UserManagementQuery } from './user-management.query';
import { delay, map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserManagementService {
  private userManagementStore = inject(UserManagementStore);
  private userManagementQuery = inject(UserManagementQuery);

  addUser(user: Omit<UmUser, 'id'>): void {
    this.userManagementStore.setLoading(true);
    this.userManagementStore.add({ ...user, id: guid() });
    this.userManagementStore.setLoading(false);
  }

  checkUserNameValidity(name: string): Observable<boolean> {
    return this.userManagementQuery.selectUsers$.pipe(
      delay(1000),
      tap(() => this.userManagementStore.setLoading(true)),
      map((users) => users.every((user) => user.name !== name)),
      tap((isUserUnique) => {
        this.userManagementStore.update({ isUserUnique });
        this.userManagementStore.setLoading(false);
      })
    );
  }
}
