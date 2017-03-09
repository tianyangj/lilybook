import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  private libraryChangedSource: BehaviorSubject<any>;

  public libraryChanged: Observable<any>;

  constructor() {
    this.libraryChangedSource = new BehaviorSubject(null);
    this.libraryChanged = this.libraryChangedSource.asObservable();
  }

}
