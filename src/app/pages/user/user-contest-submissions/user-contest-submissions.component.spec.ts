import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContestSubmissionsComponent } from './user-contest-submissions.component';

describe('UserContestSubmissionsComponent', () => {
  let component: UserContestSubmissionsComponent;
  let fixture: ComponentFixture<UserContestSubmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserContestSubmissionsComponent]
    });
    fixture = TestBed.createComponent(UserContestSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
