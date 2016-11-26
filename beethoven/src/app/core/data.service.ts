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

    getCollection(collectionId: string, size = 4) {
        return this.angularFire.database
            .object(`/index-collections/${collectionId}`)
            .map(collection => {
                let compositionIds = Object.keys(collection.compositions).sort((x, y) => {
                    return collection.compositions[x] - collection.compositions[y]
                }).slice(0, size);
                return {
                    id: collection.$key,
                    name: collection.name,
                    compositions: compositionIds.map(compositionId => {
                        return this.getComposition(compositionId);
                    })
                };
            });
    }

    getKey(id: string): Observable<any> {
        return this.angularFire.database.object(`/key/${id}`);
    }

}
