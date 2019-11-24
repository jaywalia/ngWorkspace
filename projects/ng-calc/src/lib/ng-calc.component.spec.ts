import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCalcComponent } from './ng-calc.component';

describe('NgCalcComponent', () => {
  let component: NgCalcComponent;
  let fixture: ComponentFixture<NgCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
