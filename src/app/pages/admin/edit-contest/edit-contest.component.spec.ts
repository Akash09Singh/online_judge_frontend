import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContestComponent } from './edit-contest.component';

describe('EditContestComponent', () => {
  let component: EditContestComponent;
  let fixture: ComponentFixture<EditContestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditContestComponent]
    });
    fixture = TestBed.createComponent(EditContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
