import { TestBed } from '@angular/core/testing';

import { TestcaseServiceService } from './testcase-service.service';

describe('TestcaseServiceService', () => {
  let service: TestcaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestcaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
