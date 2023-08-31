import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProblemSubmissionComponent } from './user-problem-submission.component';

describe('UserProblemSubmissionComponent', () => {
  let component: UserProblemSubmissionComponent;
  let fixture: ComponentFixture<UserProblemSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProblemSubmissionComponent]
    });
    fixture = TestBed.createComponent(UserProblemSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
