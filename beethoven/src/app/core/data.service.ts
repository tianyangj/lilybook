import { Injectable } from '@angular/core';
import {
    AngularFire,
    FirebaseListObservable,
    FirebaseObjectObservable,
    FirebaseAuthState,
    AuthProviders,
    AuthMethods
} from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
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

    getComposition(id: string): Observable<any> {
        return this.angularFire.database.object(`/compositions/${id}`);
    }

    getCollection(collectionId: string, limit = 4) {
        return this.angularFire.database
            .object(`/index-collections/${collectionId}`)
            .switchMap(collection => {
                if (!collection.$exists()) {
                    return Observable.of(null);
                }
                let compositionIds = Object.keys(collection.compositions).sort((x, y) => {
                    return collection.compositions[x] - collection.compositions[y]
                }).slice(0, limit);
                return Observable.forkJoin(
                    compositionIds.map(compositionId => {
                        return this.getComposition(compositionId).first();
                    })
                );
            }, (collection, compositions) => {
                if (!collection.$exists()) {
                    return null;
                }
                return {
                    id: collection.$key,
                    name: collection.name,
                    book: collection.book,
                    compositions
                };
            });
    }

    hasCollection(collectionId) {
        return this.angularFire.database.object(`/index-collections/${collectionId}`)
            .map(collection => <boolean>collection.$exists());
    }

    getComposerCollection(composerId: string, limit = 4) {
        return this.angularFire.database
            .object(`/index-composers/${composerId}`)
            .switchMap(collection => {
                if (!collection.$exists()) {
                    return Observable.of(null);
                }
                let compositionIds = Object.keys(collection.compositions).sort((x, y) => {
                    return collection.compositions[x] - collection.compositions[y]
                }).slice(0, limit);
                return Observable.forkJoin(
                    compositionIds.map(compositionId => {
                        return this.getComposition(compositionId).first();
                    })
                );
            }, (collection, compositions) => {
                if (!collection.$exists()) {
                    return null;
                }
                return {
                    id: collection.$key,
                    name: collection.name,
                    book: collection.book,
                    compositions
                };
            });
    }

    hasComposerCollection(collectionId) {
        return this.angularFire.database.object(`/index-composers/${collectionId}`)
            .map(collection => <boolean>collection.$exists());
    }

    getUserCollections(userId: string) {
        return this.angularFire.database.list(`/user-collections/${userId}`);
    }

    setUserCollection(userId: string, collectionId: string, value: { compositions: any, name: any }) {
        let collection = this.angularFire.database.object(`/user-collections/${userId}/${collectionId}`);
        return collection.set(value);
    }

    createUserCollection(userId: string, collectionName: string, compositionId) {
        let collection = this.angularFire.database.list(`/user-collections/${userId}`);
        return collection.push({
            name: collectionName,
            compositions: {
                [compositionId]: true
            }
        });
    }

    removeUserCollection(userId: string, collectionId: string, compositionId: string) {
        let composition = this.angularFire.database.object(`/user-collections/${userId}/${collectionId}/compositions/${compositionId}`);
        return composition.remove();
    }

    getKey(id: string): Observable<{
        name: string,
        image: string,
        wiki: string
    }> {
        return this.angularFire.database.object(`/key/${id}`);
    }

    getForm(id: string): Observable<{
        name: string,
        description: string,
        wiki: string,
        order: number
    }> {
        return this.angularFire.database.object(`/form/${id}`);
    }

    getRcm(id: string): Observable<{
        certificate: string,
        name: string,
        description?: string,
        order: number
    }> {
        return this.angularFire.database.object(`/rcm/${id}`);
    }

    getAbrsm(id: string): Observable<{
        name: string,
        description?: string,
        order: number
    }> {
        return this.angularFire.database.object(`/abrsm/${id}`);
    }

    getHenle(id: string): Observable<{
        name: string
    }> {
        return this.angularFire.database.object(`/henle/${id}`);
    }

    getVanity(vanity: string) {
        return this.angularFire.database.object(`/user-vanity/${vanity}`);
    }

}
