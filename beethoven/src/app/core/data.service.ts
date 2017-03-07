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
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/forkJoin';
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

    hasCollection(collectionId) {
        return this.angularFire.database.object(`/collections/${collectionId}/name`)
            .map(name => <boolean>name.$exists());
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

    getComposer(id: string): FirebaseObjectObservable<Composer> {
        return this.withObjectCache<Composer>(`/composers/${id}`)
            .map((composer: Composer) => {
                return Object.assign(composer, {
                    compositions$: composer.compositions ?
                        Object.keys(composer.compositions).map(id => this.getComposition(id)) : null
                });
            }) as FirebaseObjectObservable<Composer>;
    }

    getCollection(id: string): FirebaseObjectObservable<Collection> {
        return this.withObjectCache<Collection>(`/collections/${id}`)
            .map((collection: Collection) => {
                if (collection.$exists()) {
                    let compositionIds = Object
                        .keys(collection.compositions)
                        .sort((x, y) => {
                            return collection.compositions[x] - collection.compositions[y];
                        });
                    return Object.assign(collection, {
                        compositions$: compositionIds.map(id => this.getComposition(id))
                    });
                }
                return collection;
            }) as FirebaseObjectObservable<Collection>;
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
            return Observable.of<T>(this.cache[url])
                .do(data => {
                    if (!environment.production) {
                        console.info('Cache HIT', url);
                    }
                }) as FirebaseObjectObservable<T>;
        }
        return this.angularFire.database.object(url)
            .do(data => {
                if (!environment.production) {
                    console.info('Cache MISS', url);
                }
                this.cache[url] = data;
            }) as FirebaseObjectObservable<T>;
    }

}
