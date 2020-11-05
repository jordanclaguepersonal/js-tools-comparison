import { Component, Input } from '@angular/core';
import { StateService } from '../state.service'

@Component({
  selector: 'app-task-placeholder',
  templateUrl: './task-placeholder.component.html',
  styleUrls: ['./task-placeholder.component.scss']
})

export class TaskPlaceholderComponent {

  @Input() cid

  isEditing = false
  title = ''
  description = ''

  constructor(readonly stateService: StateService) {
    // Nothing to see here.
  }

  toggleEditing () {
    this.isEditing = !this.isEditing
  }

  createTask () {
    this.toggleEditing()

    this.stateService.addTask({
      id: this.stateService.getTasks().length + 1,
      column: this.cid,
      title: this.title,
      description: this.description
    })

    this.title = ''
    this.description = ''
  }

  updateTitle (title) {
    this.title = title
  }

  updateDescription (description) {
    this.description = description
  }
}
