import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestcaseComponent } from './add-testcase.component';

describe('AddTestcaseComponent', () => {
  let component: AddTestcaseComponent;
  let fixture: ComponentFixture<AddTestcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTestcaseComponent]
    });
    fixture = TestBed.createComponent(AddTestcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
