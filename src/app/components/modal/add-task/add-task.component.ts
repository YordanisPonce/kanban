import { Component, HostListener, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Input() option: number | undefined = 0;
  taskForm: FormGroup
  constructor(private td: FormBuilder) {
    this.taskForm = this.td.group({
      title: ['', Validators.required],
      description: [''],
      status: ['', Validators.required]
    })
  }

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    event.stopPropagation()
  }


  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    setTimeout(() => {
      !this.taskForm.pristine && this.taskForm.reset();
    }, 350);
  }

  handleSubmit() {
    console.log(this.taskForm.value)
  }


}
