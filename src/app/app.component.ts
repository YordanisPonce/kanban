import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban';
  navBarTitle: string | undefined

  getTitle(title: string) {
    this.navBarTitle = title
  }
}
