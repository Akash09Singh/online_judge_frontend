import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProblemListComponent } from './user-problem-list.component';

describe('UserProblemListComponent', () => {
  let component: UserProblemListComponent;
  let fixture: ComponentFixture<UserProblemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProblemListComponent]
    });
    fixture = TestBed.createComponent(UserProblemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
