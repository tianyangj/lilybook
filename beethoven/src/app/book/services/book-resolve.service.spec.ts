/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookResolveService } from './book-resolve.service';

describe('BookResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookResolveService]
    });
  });

  it('should ...', inject([BookResolveService], (service: BookResolveService) => {
    expect(service).toBeTruthy();
  }));
});
