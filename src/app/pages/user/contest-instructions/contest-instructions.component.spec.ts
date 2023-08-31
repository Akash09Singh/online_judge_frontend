import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestInstructionsComponent } from './contest-instructions.component';

describe('ContestInstructionsComponent', () => {
  let component: ContestInstructionsComponent;
  let fixture: ComponentFixture<ContestInstructionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContestInstructionsComponent]
    });
    fixture = TestBed.createComponent(ContestInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
