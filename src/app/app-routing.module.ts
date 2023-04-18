import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TaskComponent } from './components/task/task.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { authGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: WelcomeComponent, canActivate: [authGuard] },
  { path: 'task/:id', component: TaskComponent, canActivate: [authGuard] },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
