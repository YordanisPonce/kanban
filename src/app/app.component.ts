import { Component, HostListener, OnChanges, OnInit, SimpleChanges, } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'kanban';
  navBarTitle: string | undefined;
  toggleDrawer: boolean = false;
  innerWidth: number = 0;
  maxWidth: number = 768;
  modalOpened: boolean | undefined
  createBoardModal: boolean | undefined
  constructor() { }

  ngOnInit(): void {
    this.modalOpened = false;
    this.createBoardModal = false;
    this.setGlobalWidth();
  }

  getTitle(title: string) {
    this.navBarTitle = title
  }

  handleShowDrawer(event: Event) {
    event.stopPropagation();
    if (window.innerWidth <= this.maxWidth) {
      this.toggleDrawer = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setGlobalWidth();
  }

  hideAside(show: boolean) {
    if (this.toggleDrawer && show) {
      this.toggleDrawer = false;
    }
  }

  setGlobalWidth() {
    this.innerWidth = window.innerWidth
  }

  toggleModal(toggle: boolean) {
    this.modalOpened = toggle;
  }
  toggleModalCreate(toggle: boolean) {
    this.createBoardModal = toggle;
  }

  openAsideModal(value: boolean) {
    this.toggleModalCreate(value)
  }
}
