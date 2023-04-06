import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Input() option: number | undefined = 0;
  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    event.stopPropagation()
  }

}
