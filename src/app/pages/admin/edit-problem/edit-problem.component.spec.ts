import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProblemComponent } from './edit-problem.component';

describe('EditProblemComponent', () => {
  let component: EditProblemComponent;
  let fixture: ComponentFixture<EditProblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProblemComponent]
    });
    fixture = TestBed.createComponent(EditProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
