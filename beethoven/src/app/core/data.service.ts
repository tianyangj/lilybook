import { Injectable } from '@angular/core';
import {
    AngularFire,
    FirebaseListObservable,
    FirebaseObjectObservable
} from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/publishLast';

import { environment } from '../../environments/environment';
import {
    Abrsm,
    Collection,
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

    getComposerList(): Observable<Composer[]> {
        return this.angularFire.database.list('/list-composers', {
            query: { orderByValue: true }
        }).switchMap(composers => {
            return Observable.combineLatest(
                composers.map(composer => this.getComposer(composer.$key))
            );
        });
    }

    hasCollection(collectionId): Observable<boolean> {
        return this.angularFire.database.object(`/collections/${collectionId}/name`)
            .map(name => <boolean>name.$exists());
    }

    getUserCollections(uid: string): Observable<Collection[]> {
        return this.angularFire.database.list(`/user-collections/${uid}`)
            .map(collections => {
                return collections.map(collection => {
                    let compositionIds = Object
                        .keys(collection.compositions || {})
                        .sort((x, y) => {
                            return collection.compositions[x] - collection.compositions[y];
                        });
                    return Object.assign({}, collection, {
                        $key: collection.$key, // copy non-enumerable property
                        compositions$: compositionIds.map(compositionId => this.getComposition(compositionId))
                    });
                });
            });
    }

    setUserCollections(uid: string, collectionId: string | null, collection: {
        name: string,
        compositions: {}
    }): Observable<string> {
        let promise;
        if (collectionId) {
            promise = this.angularFire.database.object(`/user-collections/${uid}/${collectionId}`)
                .set(collection);
        } else {
            promise = this.angularFire.database.list(`/user-collections/${uid}`)
                .push(collection);
        }
        return Observable.from(promise.then(() => uid));
    }

    hasVanity(username: string) {
        return this.angularFire.database.object(`/user-vanity/${username}`)
            .map(value => <boolean>value.$exists());
    }

    setVanity(username: string, uid: string) {
        return this.angularFire.database.object(`/user-vanity/${username}`).set(uid);
    }

    getUserProfile(username: string) {
        return this.angularFire.database.object(`/user-profile/${username}`)
            .filter(data => data.$exists())
            .switchMap(data => {
                return this.getUserCollections(data.uid);
            }, (user, collections) => {
                return { user, collections };
            });
    }

    // cache enabled below

    getComposition(id: string): Observable<Composition> {
        return this.withObjectCache<Composition>(`/compositions/${id}`)
            .map((composition: Composition) => {
                if (!composition.$exists()) {
                    return null;
                }
                return Object.assign({}, composition, {
                    $key: composition.$key, // copy non-enumerable property
                    composer$: composition.composerId ? this.getComposer(composition.composerId) : null,
                    abrsm$: composition.abrsm ? this.getAbrsm(composition.abrsm) : null,
                    key$: composition.key ? this.getKey(composition.key) : null,
                    form$: composition.form ? this.getForm(composition.form) : null,
                    rcm$: composition.rcm ? this.getRcm(composition.rcm) : null,
                    henle$: composition.henle ? this.getHenle(composition.henle) : null
                });
            });
    }

    getComposer(id: string): Observable<Composer> {
        return this.withObjectCache<Composer>(`/composers/${id}`)
            .map((composer: Composer) => {
                if (!composer.$exists()) {
                    return null;
                }
                let compositionIds = Object
                    .keys(composer.compositions || {})
                    .sort((x, y) => {
                        return composer.compositions[x] - composer.compositions[y];
                    });
                return Object.assign({}, composer, {
                    $key: composer.$key, // copy non-enumerable property
                    compositions$: compositionIds.map(id => this.getComposition(id))
                });
            });
    }

    getCollection(id: string): Observable<Collection> {
        return this.withObjectCache<Collection>(`/collections/${id}`)
            .map((collection: Collection) => {
                if (!collection.$exists()) {
                    return null;
                }
                let compositionIds = Object
                    .keys(collection.compositions)
                    .sort((x, y) => {
                        return collection.compositions[x] - collection.compositions[y];
                    });
                return Object.assign({}, collection, {
                    $key: collection.$key, // copy non-enumerable property
                    compositions$: compositionIds.map(id => this.getComposition(id))
                });
            });
    }

    getKey(id: string): Observable<Key> {
        return this.withObjectCache<Key>(`/key/${id}`);
    }

    getForm(id: string): Observable<Form> {
        return this.withObjectCache<Form>(`/form/${id}`);
    }

    getRcm(id: string): Observable<Rcm> {
        return this.withObjectCache<Rcm>(`/rcm/${id}`);
    }

    getAbrsm(id: string): Observable<Abrsm> {
        return this.withObjectCache<Abrsm>(`/abrsm/${id}`);
    }

    getHenle(id: string): Observable<Henle> {
        return this.withObjectCache<Henle>(`/henle/${id}`);
    }

    private withObjectCache<T>(url): Observable<T> {
        if (this.cache[url]) {
            return Observable.of<T>(this.cache[url])
                .do(data => {
                    if (environment.debug) {
                        console.debug('Cache HIT', url);
                    }
                });
        }
        return this.angularFire.database.object(url)
            .do(data => {
                if (environment.debug) {
                    console.debug('Cache MISS', url);
                }
                this.cache[url] = data;
            });
    }

}
