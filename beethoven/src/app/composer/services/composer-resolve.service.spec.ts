/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComposerResolveService } from './composer-resolve.service';

describe('ComposerResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComposerResolveService]
    });
  });

  it('should ...', inject([ComposerResolveService], (service: ComposerResolveService) => {
    expect(service).toBeTruthy();
  }));
});
