import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccComponent } from './savings-acc.component';

describe('SavingsAccComponent', () => {
  let component: SavingsAccComponent;
  let fixture: ComponentFixture<SavingsAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingsAccComponent]
    });
    fixture = TestBed.createComponent(SavingsAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
