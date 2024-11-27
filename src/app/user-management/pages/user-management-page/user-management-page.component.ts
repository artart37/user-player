import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableHeader, UmModalService } from '../../../shared/ui';
import { UmUser } from '../../models';
import { UserManagementQuery } from '../../data-access';
import { USER_TABLE_HEADERS } from '../../ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'um-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrl: './user-management-page.component.scss',
})
export class UserManagementPageComponent {
  private modalService = inject(UmModalService);
  private userQueryService = inject(UserManagementQuery);

  usersData$ = this.userQueryService.selectUsers$;
  headers: TableHeader<UmUser>[] = USER_TABLE_HEADERS;

  addUser(): void {
    this.modalService.open();
  }

  handleConfirm() {
    throw new Error('Method not implemented.');
  }

  handleCancel() {
    this.modalService.close();
  }
}
