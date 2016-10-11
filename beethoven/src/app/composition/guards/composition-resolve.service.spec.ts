/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompositionResolveService } from './composition-resolve.service';

describe('Service: CompositionResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompositionResolveService]
    });
  });

  it('should ...', inject([CompositionResolveService], (service: CompositionResolveService) => {
    expect(service).toBeTruthy();
  }));
});
