import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';

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

    getComposition(id: string): Observable<any> {
        return this.angularFire.database.object(`/compositions/${id}`);
    }

    getCollection(collectionId: string) {
        return this.angularFire.database
            .object(`/index-collections/${collectionId}`)
            .map(collection => {
                return {
                    name: collection.name,
                    compositions: Object.keys(collection.compositions).map(compositionId => {
                        return this.getComposition(compositionId);
                    })
                };
            });
    }

}
