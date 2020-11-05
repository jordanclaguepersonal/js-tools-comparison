import { Component } from '@angular/core';
import { StateService } from '../state.service'

@Component({
  selector: 'app-column-container',
  templateUrl: './column-container.component.html',
  styleUrls: ['./column-container.component.scss']
})

export class ColumnContainerComponent {
  constructor(readonly stateService: StateService) {
    // Nothing to see here.
  }
}
