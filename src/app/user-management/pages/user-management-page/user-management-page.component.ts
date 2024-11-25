import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableHeader, TableRow } from '../../../shared/ui';
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
  data: TableRow<UmUser>[] = INITIAL_USER_ENTITIES;
  headers: TableHeader<UmUser>[] = USER_TABLE_HEADERS;
}
