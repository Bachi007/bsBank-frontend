import { TestBed } from '@angular/core/testing';

import { SavingsbankService } from './savingsbank.service';

describe('SavingsbankService', () => {
  let service: SavingsbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingsbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
