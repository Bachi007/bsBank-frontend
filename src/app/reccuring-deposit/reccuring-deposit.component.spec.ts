import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReccuringDepositComponent } from './reccuring-deposit.component';

describe('ReccuringDepositComponent', () => {
  let component: ReccuringDepositComponent;
  let fixture: ComponentFixture<ReccuringDepositComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReccuringDepositComponent]
    });
    fixture = TestBed.createComponent(ReccuringDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
