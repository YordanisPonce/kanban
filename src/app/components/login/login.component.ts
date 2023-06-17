import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loading: boolean | undefined
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.redirectToHome();
    }
  }

  signIn() {
    this.loading = true;
    this.authService.signIn(this.loginForm.value).subscribe({
      next: (resp: any) => {
        localStorage['kanban_token'] = resp.token;
        this.loading = false;
        this.redirectToHome();
      },
      error: (resp) => {
        if (resp.status == 401) {
          alert('Sus credenciales son incorrectas')
        }
      }
    });
    this.redirectToHome();
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
