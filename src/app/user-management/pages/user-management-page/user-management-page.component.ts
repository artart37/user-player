import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableHeader, UmModalService } from '../../../shared/ui';
import { UmUser } from '../../models';
import { UserManagementQuery } from '../../data-access';
import { USER_TABLE_HEADERS } from '../../ui';
import { tap } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'um-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrl: './user-management-page.component.scss',
})
export class UserManagementPageComponent {
  private modalService = inject(UmModalService);
  private userQuery = inject(UserManagementQuery);
  canUsersBeAdded$ = this.userQuery.selectCanUsersBeAdded$.pipe(
    tap(console.log)
  );

  usersData$ = this.userQuery.selectUsers$;
  headers: TableHeader<UmUser>[] = USER_TABLE_HEADERS;

  addUser(): void {
    this.modalService.open();
  }
}
