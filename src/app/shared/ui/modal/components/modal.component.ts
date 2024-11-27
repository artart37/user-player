import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { UmButtonComponent } from '../../button';
import { UmModalService } from '../services';

@Component({
  selector: 'um-modal',
  standalone: true,
  imports: [CommonModule, UmButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class UmModalComponent {
  private modalService = inject(UmModalService);

  @Input() cancelLabel = 'Cancel';
  @Input() confirmLabel = 'Submit';
  @Input() content!: TemplateRef<unknown>;
  @Input() displayActions = false;
  @Input() isConfirmDisabled = false;

  @Output() cancelEvent = new EventEmitter<void>();
  @Output() confirmEvent = new EventEmitter<void>();

  isModalOpen$ = this.modalService.isModalOpen$;

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
