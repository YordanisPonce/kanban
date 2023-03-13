import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  title = 'kanban';
  links = ['All boards', 'Platform Launch', 'Marketing Plan'];
  @Output() navbarBrand = new EventEmitter<string>(undefined);

  constructor(private route: Router) { }

  navigateToHome() {
    this.route.navigate(['/']);
  }

  emitTitle(index?: number | undefined) {
    const value = index !== undefined ? this.links[index] : 'dashboard';
    this.navbarBrand.emit(value);
  }
}
