import { TestBed } from '@angular/core/testing';

import { BetEasyApiService } from './bet-easy-api.service';

describe('BetEasyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BetEasyApiService = TestBed.get(BetEasyApiService);
    expect(service).toBeTruthy();
  });
});
