import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  id: number | undefined
  private observable: any
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.observable = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }


}
