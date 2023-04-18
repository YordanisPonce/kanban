import { Component, HostListener } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent {
  taskForm: FormGroup
  constructor(private td: FormBuilder) {

    this.taskForm = this.td.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
    })
  }


  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    event.stopPropagation()
  }

  handleSubmit() {
    console.table(this.taskForm.status);
  }
}
