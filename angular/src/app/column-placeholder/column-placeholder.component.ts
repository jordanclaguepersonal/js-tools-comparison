import { Component, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-column-placeholder',
  templateUrl: './column-placeholder.component.html',
  styleUrls: ['./column-placeholder.component.scss']
})

export class ColumnPlaceholderComponent {
  isEditing = false
  name = ''

  constructor(private stateService: StateService) {
    // Nothing to see here.
  }

  toggleEditing () {
    this.isEditing = !this.isEditing
  }

  createColumn () {
    this.toggleEditing()

    this.stateService.addColumn({
      id: this.stateService.getColumns().length + 1,
      label: this.name
    })

    this.name = ''
  }

  updateName (typedName) {
    this.name = typedName
  }
}
