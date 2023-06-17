import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  loading: boolean = false
  constructor(private authService: AuthService, private route: Router) { }

  signOut() {
    this.loading = true;
    this.authService.signOut().subscribe({
      complete: () => {
        localStorage.removeItem('kanban_token');
      },
    }).add(() => {
      this.loading = false;
      this.route.navigate(['/']);
    });
  }
}
