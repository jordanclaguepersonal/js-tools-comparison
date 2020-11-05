import { Injectable } from '@angular/core';
import { Column, Task } from '../app/types';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private columns: Column[] = []
  private tasks: Task[] = []

  getColumns (): Column[] {
    return this.columns
  }

  getTasks (): Task[] {
    return this.tasks
  }

  addColumn (column: Column): void {
    this.columns.push(column)
  }

  removeColumn (columnId: number): void {
    this.tasks = this.tasks.filter((task) => task.column !== columnId)
    this.columns = this.columns.filter((column) => column.id !== columnId)
  }

  addTask (task: Task): void {
    this.tasks.push(task)
  }

  removeTask (taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
  }

  moveTask (taskId: number, newColumnId: number): void {
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId) task.column = newColumnId
      return task
    })
  }
}
