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
        return this.dataService.getUserCollections(authState.uid).first();
      } else {
        return Observable.of([]);
      }
    }).subscribe((data: Collection[]) => {
      console.info('AuthChange => Library Updating...');
      this.libraryChangedSource.next(data);
    });
  }

  setUserCollections(collectionId: string | null, collection: {
    name: string,
    compositions: {}
  } | null) {
    return this.angularFire.auth.filter((authState: FirebaseAuthState) => {
      return authState && !!authState.uid;
    }).switchMap((authState: FirebaseAuthState) => {
      return this.dataService.setUserCollections(authState.uid, collectionId, collection);
    }).switchMap((uid: string) => {
      return this.dataService.getUserCollections(uid).first();
    }).do((data: Collection[]) => {
      console.info('SetLibrary => Library Updating...');
      this.libraryChangedSource.next(data);
    });
  }

}
