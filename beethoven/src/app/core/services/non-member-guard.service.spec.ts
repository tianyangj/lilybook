import { TestBed, inject } from '@angular/core/testing';

import { NonMemberGuard } from './non-member-guard.service';

describe('NonMemberGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonMemberGuard]
    });
  });

  it('should be created', inject([NonMemberGuard], (service: NonMemberGuard) => {
    expect(service).toBeTruthy();
  }));
});
