import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'um-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class UmButtonComponent {
  @Input() accent = false;
  @Input() disabled = false;
  @Input() solid = false;
  @Input() type: 'button' | 'submit' = 'button';
}
