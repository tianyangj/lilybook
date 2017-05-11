import { TestBed, inject } from '@angular/core/testing';

import { NonMemberGuardService } from './non-member-guard.service';

describe('NonMemberGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonMemberGuardService]
    });
  });

  it('should be created', inject([NonMemberGuardService], (service: NonMemberGuardService) => {
    expect(service).toBeTruthy();
  }));
});
