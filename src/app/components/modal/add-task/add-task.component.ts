import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnChanges {
  @Input() option: number | undefined = 0;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.option);
  }
  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    event.stopPropagation()
  }

}
