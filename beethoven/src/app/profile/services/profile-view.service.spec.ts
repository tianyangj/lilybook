import { TestBed, inject } from '@angular/core/testing';

import { ProfileViewService } from './profile-view.service';

describe('ProfileViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileViewService]
    });
  });

  it('should ...', inject([ProfileViewService], (service: ProfileViewService) => {
    expect(service).toBeTruthy();
  }));
});
