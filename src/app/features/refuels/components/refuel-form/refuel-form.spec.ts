import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuelForm } from './refuel-form';

describe('RefuelForm', () => {
  let component: RefuelForm;
  let fixture: ComponentFixture<RefuelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefuelForm],
    }).compileComponents();

    fixture = TestBed.createComponent(RefuelForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
