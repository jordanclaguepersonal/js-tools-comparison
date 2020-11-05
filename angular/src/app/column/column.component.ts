import { Component, Input } from '@angular/core';
import { StateService } from '../state.service'
import { Column, Task } from '../types';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})

export class ColumnComponent {
  @Input() key: number
  @Input() column: Column

  constructor(readonly stateService: StateService) {
    // Nothing to see here.
  }

  get columnTasks (): Task[] {
    const columnTasks = this.stateService.getTasks().filter((task) => task.column === this.column.id)
    return columnTasks
  }

  get columnTitle (): string {
    const allTasks = this.stateService.getTasks()
    const tasksInColumn = allTasks.filter((task) => task.column === this.column.id)
    return `${this.column.label} <sup>${tasksInColumn.length}</sup>`
  }

  deleteColumn () {
    this.stateService.removeColumn(this.column.id)
  }

  handleDrop ($event: DragEvent) {
    $event.preventDefault()
    const data = $event.dataTransfer.getData('text')
    const parsedData = JSON.parse(data)

    this.stateService.moveTask(parsedData.id, this.column.id)
  }

  handleDragover ($event: Event) {
    $event.preventDefault()
  }
}
