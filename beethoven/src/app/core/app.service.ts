import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
import { Collection } from './models';

@Injectable()
export class AppService {

  private libraryChangedSource: BehaviorSubject<Collection[]>;

  public libraryChanged: Observable<Collection[]>;

  constructor(
    private angularFire: AngularFire,
    private dataService: DataService
  ) {
    this.libraryChangedSource = new BehaviorSubject([]);

    this.libraryChanged = this.libraryChangedSource.asObservable();

    this.angularFire.auth.switchMap((authState: FirebaseAuthState) => {
      if (authState && authState.uid) {
        return this.dataService.getUserLibrary(authState.uid);
      } else {
        return Observable.of([]);
      }
    }).subscribe((data: Collection[]) => {
      this.libraryChangedSource.next(data);
    });
  }

  removeCompositionFromCollection(collectionId: string, compositionId: string) {
    this.angularFire.auth.filter((authState: FirebaseAuthState) => {
      return authState && !!authState.uid;
    }).switchMap((authState: FirebaseAuthState) => {
      return this.dataService.removeUserLibrary(authState.uid, collectionId, compositionId);
    }).switchMap((uid: string) => {
      return this.dataService.getUserLibrary(uid);
    }).subscribe((data: Collection[]) => {
      this.libraryChangedSource.next(data);
    });
  }

}
