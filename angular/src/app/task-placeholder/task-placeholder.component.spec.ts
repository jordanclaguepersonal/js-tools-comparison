import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPlaceholderComponent } from './task-placeholder.component';

describe('TaskPlaceholderComponent', () => {
  let component: TaskPlaceholderComponent;
  let fixture: ComponentFixture<TaskPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
