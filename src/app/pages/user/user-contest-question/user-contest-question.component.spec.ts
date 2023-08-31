import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContestQuestionComponent } from './user-contest-question.component';

describe('UserContestQuestionComponent', () => {
  let component: UserContestQuestionComponent;
  let fixture: ComponentFixture<UserContestQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserContestQuestionComponent]
    });
    fixture = TestBed.createComponent(UserContestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
