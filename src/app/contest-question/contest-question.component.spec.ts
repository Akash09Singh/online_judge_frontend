import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestQuestionComponent } from './contest-question.component';

describe('ContestQuestionComponent', () => {
  let component: ContestQuestionComponent;
  let fixture: ComponentFixture<ContestQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContestQuestionComponent]
    });
    fixture = TestBed.createComponent(ContestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
