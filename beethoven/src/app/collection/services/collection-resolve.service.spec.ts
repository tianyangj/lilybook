/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollectionResolveService } from './collection-resolve.service';

describe('Service: CollectionResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionResolveService]
    });
  });

  it('should ...', inject([CollectionResolveService], (service: CollectionResolveService) => {
    expect(service).toBeTruthy();
  }));
});
