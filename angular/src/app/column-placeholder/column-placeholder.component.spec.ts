import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPlaceholderComponent } from './column-placeholder.component';

describe('ColumnPlaceholderComponent', () => {
  let component: ColumnPlaceholderComponent;
  let fixture: ComponentFixture<ColumnPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
