import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsetValuesComponent } from './getset-values.component';

describe('GetsetValuesComponent', () => {
  let component: GetsetValuesComponent;
  let fixture: ComponentFixture<GetsetValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsetValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsetValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
