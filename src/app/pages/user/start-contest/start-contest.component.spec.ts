import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartContestComponent } from './start-contest.component';

describe('StartContestComponent', () => {
  let component: StartContestComponent;
  let fixture: ComponentFixture<StartContestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartContestComponent]
    });
    fixture = TestBed.createComponent(StartContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
