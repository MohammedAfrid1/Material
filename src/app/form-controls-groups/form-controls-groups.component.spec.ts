import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlsGroupsComponent } from './form-controls-groups.component';

describe('FormControlsGroupsComponent', () => {
  let component: FormControlsGroupsComponent;
  let fixture: ComponentFixture<FormControlsGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlsGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
