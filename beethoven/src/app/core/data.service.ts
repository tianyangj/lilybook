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

import {
    Abrsm,
    Composer,
    Composition,
    Form,
    Henle,
    Key,
    Rcm
} from './models';

@Injectable()
export class DataService {

    private cache = {};

    constructor(
        private angularFire: AngularFire
    ) { }

    getComposers(): Observable<any[]> {
        return this.angularFire.database.list('/composers');
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

    getVanity(vanity: string) {
        return this.angularFire.database.object(`/user-vanity/${vanity}`);
    }

    // cache enabled below

    getComposer(id: string): FirebaseObjectObservable<Composer> {
        return this.withObjectCache<Composer>(`/composers/${id}`);
    }

    getComposition(id: string): FirebaseObjectObservable<Composition> {
        return this.withObjectCache<Composition>(`/compositions/${id}`)
            .map((composition: Composition) => {
                return Object.assign(composition, {
                    composer$: composition.composerId ? this.getComposer(composition.composerId) : null,
                    abrsm$: composition.abrsm ? this.getAbrsm(composition.abrsm) : null,
                    key$: composition.key ? this.getKey(composition.key) : null,
                    form$: composition.form ? this.getForm(composition.form) : null,
                    rcm$: composition.rcm ? this.getRcm(composition.rcm) : null,
                    henle$: composition.henle ? this.getHenle(composition.henle) : null
                });
            }) as FirebaseObjectObservable<Composition>;
    }

    getKey(id: string): FirebaseObjectObservable<Key> {
        return this.withObjectCache<Key>(`/key/${id}`);
    }

    getForm(id: string): FirebaseObjectObservable<Form> {
        return this.withObjectCache<Form>(`/form/${id}`);
    }

    getRcm(id: string): FirebaseObjectObservable<Rcm> {
        return this.withObjectCache<Rcm>(`/rcm/${id}`);
    }

    getAbrsm(id: string): FirebaseObjectObservable<Abrsm> {
        return this.withObjectCache<Abrsm>(`/abrsm/${id}`);
    }

    getHenle(id: string): FirebaseObjectObservable<Henle> {
        return this.withObjectCache<Henle>(`/henle/${id}`);
    }

    private withObjectCache<T>(url): FirebaseObjectObservable<T> {
        if (this.cache[url]) {
            console.info('Cache HIT', url);
            return Observable.of<T>(this.cache[url]) as FirebaseObjectObservable<T>;
        }
        console.info('Cache MISS', url);
        return this.angularFire.database.object(url)
            .do(data => this.cache[url] = data) as FirebaseObjectObservable<T>;
    }

}
