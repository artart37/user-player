import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UmModalService {
  private modalOpenSubject = new BehaviorSubject<boolean>(false);
  isModalOpen$ = this.modalOpenSubject.asObservable();

  open(): void {
    this.modalOpenSubject.next(true);
  }

  close(): void {
    this.modalOpenSubject.next(false);
  }
}
