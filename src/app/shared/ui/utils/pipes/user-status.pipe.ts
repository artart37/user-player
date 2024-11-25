import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToYesNo',
  standalone: true,
})
export class UmUserStatusPipe implements PipeTransform {
  transform(value: unknown): string | unknown {
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return value;
  }
}
