import { Component, ElementRef, HostListener, OnInit, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'kanban';
  navBarTitle: string | undefined;
  toggleDrawer: boolean = false;
  innerWidth: number = 0;
  maxWidth: number = 768;
  modalOpened: boolean | undefined
  ngOnInit(): void {
    this.modalOpened = false;
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

  openModal(){
    this.modalOpened = !this.modalOpened;
  }

}
