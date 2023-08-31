import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyContestComponent } from './user-my-contest.component';

describe('UserMyContestComponent', () => {
  let component: UserMyContestComponent;
  let fixture: ComponentFixture<UserMyContestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMyContestComponent]
    });
    fixture = TestBed.createComponent(UserMyContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
