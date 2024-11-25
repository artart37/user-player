import { TableHeader } from '../../../shared/ui';
import { UmUser } from '../../models';

export const USER_TABLE_HEADERS: TableHeader<UmUser>[] = [
  {
    label: 'ID',
    key: 'id',
  },
  {
    label: 'Name',
    key: 'name',
  },
  {
    label: 'Active',
    key: 'active',
  },
];
