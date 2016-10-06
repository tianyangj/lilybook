import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class DataService {

  constructor(
    private angularFire: AngularFire
  ) { }

  getComposers(): Observable<any[]> {
    return this.angularFire.database.list('/composers');
  }

  getComposer(vanity: string): Observable<any> {
    return this.angularFire.database.object(`/composers/${vanity}`);
  }

  getFeatures(): Observable<Observable<any>[]> {
    return this.angularFire.database.list('/index-features').map(features => {
      return features.map(feature => {
        return this.angularFire.database.object(`/compositions/${feature.$key}`);
      });
    });
  }

}
