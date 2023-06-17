import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  @Input() option: number | undefined = 0;
  taskForm: FormGroup
  constructor(private td: FormBuilder, private router: Router) {
    this.taskForm = this.td.group({
      title: ['', Validators.required],
      description: [''],
      status: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  
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
