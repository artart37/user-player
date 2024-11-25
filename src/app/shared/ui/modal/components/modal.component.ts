import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { UmButtonComponent } from '../../button';

@Component({
  selector: 'um-modal',
  standalone: true,
  imports: [CommonModule, UmButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class UmModalComponent {
  @Input() cancelLabel = 'Cancel';
  @Input() confirmLabel = 'Submit';
  @Input() content!: TemplateRef<unknown>;
  @Input() isConfirmDisabled = false;

  @Output() cancelEvent = new EventEmitter<void>();
  @Output() confirmEvent = new EventEmitter<void>();

  close(): void {
    this.cancelEvent.emit();
  }

  cancel(): void {
    this.cancelEvent.emit();
  }

  confirm(): void {
    this.confirmEvent.emit();
  }
}
