import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProfileViewService {

  private collectionSource = new Subject<any>();

  collection$ = this.collectionSource.asObservable();

  constructor() { }

  setActiveCollection(collection) {
    this.collectionSource.next(collection);
  }
}
