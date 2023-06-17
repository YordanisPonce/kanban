import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent {
  boardForm: FormGroup
  @Output() hideModal = new EventEmitter<boolean>(false);
  constructor(private td: FormBuilder, private projectService: ProjectService) {
    this.boardForm = this.td.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
    })
  }


  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    event.stopPropagation()
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    setTimeout(() => {
      !this.boardForm.pristine && this.boardForm.reset();
    }, 350);
  }

  handleSubmit() {
    this.projectService.storeProject(this.boardForm.value).subscribe({
      next: (resp: any) => {
        this.projectService.addProject(resp.data)
        this.hideModal.emit(false);
      },
      error: (resp) => {
        alert('Ha ocurrido un error a la hora de insertar un nuevo proyecto')
      }
    });


  }
}
