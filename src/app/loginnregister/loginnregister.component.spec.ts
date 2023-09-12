import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnregisterComponent } from './loginnregister.component';

describe('LoginnregisterComponent', () => {
  let component: LoginnregisterComponent;
  let fixture: ComponentFixture<LoginnregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginnregisterComponent]
    });
    fixture = TestBed.createComponent(LoginnregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
