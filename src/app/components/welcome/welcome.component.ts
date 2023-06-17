import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  loading: boolean = false;
  constructor(public projectService: ProjectService) { }


  destroyProject(id: number) {
    if (confirm('¿Desea ejecutar esta operaciòn?')) {
      this.loading = true;
      this.projectService.destroyProject(id).subscribe({
        next: () => {
          this.projectService.boards = this.projectService.boards?.filter(el => el.id != id);
        },
        error: resp => {
          alert(resp.message);
        }
      }).add(() => {
        this.loading = false;
      })
    }
  }



}
