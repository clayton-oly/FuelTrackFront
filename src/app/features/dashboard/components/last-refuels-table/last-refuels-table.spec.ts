import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRefuelsTable } from './last-refuels-table';

describe('LastRefuelsTable', () => {
  let component: LastRefuelsTable;
  let fixture: ComponentFixture<LastRefuelsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastRefuelsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(LastRefuelsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
