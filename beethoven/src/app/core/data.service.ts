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

    auth() {
        return this.angularFire.auth;
    }

    login(credentials: {
        email: string,
        password: string
    }): firebase.Promise<FirebaseAuthState> {
        return this.angularFire.auth.login(credentials, {
            provider: AuthProviders.Password,
            method: AuthMethods.Password
        });
    }

    logout() {
        return this.angularFire.auth.logout();
    }

    signup(credentials: {
        email: string,
        password: string,
        displayName: string
    }): firebase.Promise<FirebaseAuthState> {
        return this.angularFire.auth.createUser(credentials).then(authState => {
            // don't wait set displayName
            authState.auth.updateProfile({
                displayName: credentials.displayName,
                photoURL: ''
            });
            return authState;
        });
    }

    getVanity(vanity: string) {
        return this.angularFire.database.object(`/user-vanity/${vanity}`);
    }

}
