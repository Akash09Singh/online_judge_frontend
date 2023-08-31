import { TestBed } from '@angular/core/testing';

import { SubmitContestService } from './submit-contest.service';

describe('SubmitContestService', () => {
  let service: SubmitContestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitContestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
