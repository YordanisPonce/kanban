import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent {
  boardForm: FormGroup
  constructor(private td: FormBuilder) {
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
    console.log(this.boardForm.value)
  }
}
