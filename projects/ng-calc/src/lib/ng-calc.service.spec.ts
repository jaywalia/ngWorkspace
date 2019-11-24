import { TestBed } from '@angular/core/testing';

import { NgCalcService } from './ng-calc.service';

describe('NgCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCalcService = TestBed.get(NgCalcService);
    expect(service).toBeTruthy();
  });
});
