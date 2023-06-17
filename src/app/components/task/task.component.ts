import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/interfaces/Task';
import { SuccessResponse } from 'src/app/interfaces/SuccessResponse';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  id: number | undefined;
  tasks: Task[] | undefined;
  constructor(private route: ActivatedRoute, private taskService: TaskService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.id && this.taskService.getTasks(this.id).subscribe({
        next: (resp: SuccessResponse) => {
          this.tasks = resp.data as Task[];
        },
        error: (resp: any) => {
          alert(resp.message)
        }
      })
    });
  }


  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event.currentIndex);
  }

  onDragStarted(event: CdkDragStart) {
    event.source.element.nativeElement.style.visibility = 'hidden';
  }
  onDragEnded(event: CdkDragEnd) {
    event.source.element.nativeElement.style.visibility = 'visible';
  }

}
