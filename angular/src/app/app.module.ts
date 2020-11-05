import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';
import { ColumnContainerComponent } from './column-container/column-container.component';
import { ColumnPlaceholderComponent } from './column-placeholder/column-placeholder.component';
import { TaskComponent } from './task/task.component';
import { TaskPlaceholderComponent } from './task-placeholder/task-placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    ColumnContainerComponent,
    ColumnPlaceholderComponent,
    TaskComponent,
    TaskPlaceholderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
