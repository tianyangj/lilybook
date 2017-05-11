import { TestBed, inject } from '@angular/core/testing';

import { MemberGuardService } from './member-guard.service';

describe('MemberGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberGuardService]
    });
  });

  it('should be created', inject([MemberGuardService], (service: MemberGuardService) => {
    expect(service).toBeTruthy();
  }));
});
