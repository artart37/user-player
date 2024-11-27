import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableHeader, TableRow } from '../models';
import { UmUserStatusPipe } from '../../utils';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'um-table',
  standalone: true,
  imports: [CommonModule, UmUserStatusPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class UmTableComponent<T> {
  @Input() data: TableRow<T>[] | null = [];
  @Input() headers: TableHeader<T>[] | null = [];

  trackById(index: number, item: any): number | string {
    if (item.hasOwnProperty('id')) {
      return item.id;
    } else {
      return index;
    }
  }
}
