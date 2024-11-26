import { guid } from '@datorama/akita';
import { UmUser } from '../../models';

export const INITIAL_USER_ENTITIES: UmUser[] = [
  {
    id: guid(),
    name: 'John Doe',
    active: true,
  },
  {
    id: guid(),
    name: 'Jane Brown',
    active: true,
  },
  {
    id: guid(),
    name: 'John Smith',
    active: true,
  },
  {
    id: guid(),
    name: 'Jane Anderson',
    active: true,
  },
];
