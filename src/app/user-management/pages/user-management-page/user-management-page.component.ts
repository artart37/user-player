import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableHeader, TableRow, UmModalService } from '../../../shared/ui';
import { UmUser } from '../../models';
import { INITIAL_USER_ENTITIES } from '../../data-access';
import { USER_TABLE_HEADERS } from '../../ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'um-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrl: './user-management-page.component.scss',
})
export class UserManagementPageComponent {
  private modalService = inject(UmModalService);

  data: TableRow<UmUser>[] = INITIAL_USER_ENTITIES;
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
