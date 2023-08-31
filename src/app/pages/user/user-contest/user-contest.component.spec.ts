import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContestComponent } from './user-contest.component';

describe('UserContestComponent', () => {
  let component: UserContestComponent;
  let fixture: ComponentFixture<UserContestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserContestComponent]
    });
    fixture = TestBed.createComponent(UserContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
