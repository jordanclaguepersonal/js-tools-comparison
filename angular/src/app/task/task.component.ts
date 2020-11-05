import { Component, Input } from '@angular/core';
import { StateService } from '../state.service'
import { Task } from '../types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {
  @Input() key: number
  @Input() task: Task

  constructor(readonly stateService: StateService) {
    // Nothing to see here.
  }

  deleteTask () {
    this.stateService.removeTask(this.task.id)
  }

  handleDragStart ($event: DragEvent) {
    $event.dataTransfer.setData('text', JSON.stringify(this.task))
  }
}
