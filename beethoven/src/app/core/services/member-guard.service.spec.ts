import { TestBed, inject } from '@angular/core/testing';

import { MemberGuard } from './member-guard.service';

describe('MemberGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberGuard]
    });
  });

  it('should be created', inject([MemberGuard], (service: MemberGuard) => {
    expect(service).toBeTruthy();
  }));
});
