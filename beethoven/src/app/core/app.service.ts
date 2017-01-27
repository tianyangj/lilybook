import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

  private popupInitializedSource = new Subject();
  private popupDestroyedSource = new Subject();

  popupInitialized = this.popupInitializedSource.asObservable();
  popupDestroyed = this.popupDestroyedSource.asObservable();

  constructor() { }

  initializePopup() {
    this.popupInitializedSource.next();
  }

  destroyPopup() {
    this.popupDestroyedSource.next();
  }

}
