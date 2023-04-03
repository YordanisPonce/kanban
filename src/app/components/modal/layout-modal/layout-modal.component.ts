import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout-modal',
  templateUrl: './layout-modal.component.html',
  styleUrls: ['./layout-modal.component.scss']
})
export class LayoutModalComponent {
  @Output() hideModal = new EventEmitter<boolean>(false);
  @Input() selectedModal: number | undefined = 0

  @HostListener('click')
  handleClick() {
    this.hideModal.emit(false);
  }
}
