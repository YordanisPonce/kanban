import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  title = 'kanban';
  links = ['All boards', 'Platform Launch', 'Marketing Plan'];
  controlSwitch: boolean = false
  @Output() navbarBrand = new EventEmitter<string>(undefined);
  @Output() hideAside = new EventEmitter<boolean>(false)

  outside: boolean = true;
  date: number | undefined
  modalOpened: boolean | undefined

  constructor(private route: Router) { }
  ngOnInit(): void {
    this.date = new Date().getFullYear();
    let theme = (localStorage.getItem('theme') as unknown) as boolean;
    if (theme) {
      this.controlSwitch = theme;
    }
  }

  navigateToHome() {
    this.route.navigate(['/']);
  }

  emitTitle(index?: number | undefined) {
    const value = index !== undefined ? this.links[index] : 'dashboard';
    this.navbarBrand.emit(value);
  }

  switchToggle() {
    this.controlSwitch = !this.controlSwitch;
    localStorage.setItem('theme', this.controlSwitch as unknown as string);
  }

  @HostListener('click')
  handleClick() {
    this.outside = false;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    this.hideAside.emit(this.outside);
    this.outside = true;
  }
}
