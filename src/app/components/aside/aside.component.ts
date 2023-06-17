import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/Project';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  title = 'kanban';
  links: Project | undefined = undefined;
  controlSwitch: boolean = false
  @Output() navbarBrand = new EventEmitter<string>(undefined);
  @Output() hideAside = new EventEmitter<boolean>(false)
  @Output() openM = new EventEmitter<boolean>(false)

  outside: boolean = true;
  date: number | undefined
  modalOpened: boolean | undefined

  constructor(private route: Router, public projectService: ProjectService, private authService: AuthService) { }
  ngOnInit(): void {
    this.date = new Date().getFullYear();
    let theme = (localStorage.getItem('theme') as unknown) as boolean;
    if (theme) {
      this.controlSwitch = theme;
    }

    this.projectService.getProjects().subscribe({
      next: (resp: Project) => {
        this.projectService.boards = resp.data;
      },
      error: (resp) => {
        if (resp.status == 401) {
          this.authService.redirectToLogin();
        }
      }
    });
  }

  navigateToHome() {
    this.route.navigate(['/']);
  }

  emitTitle(id?: number | undefined) {
    const value = this.projectService.boards?.find(el => el.id == id)


    this.navbarBrand.emit(value?.title);
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


  openModal() {
    this.openM.emit(true);
  }
}
