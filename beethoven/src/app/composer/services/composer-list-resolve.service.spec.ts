/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComposerListResolveService } from './composer-list-resolve.service';

describe('ComposerListResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComposerListResolveService]
    });
  });

  it('should ...', inject([ComposerListResolveService], (service: ComposerListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
