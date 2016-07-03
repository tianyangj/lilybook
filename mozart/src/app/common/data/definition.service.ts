export class DefinitionDataService {

    private abrsmRef;
    private formRef;
    private henleRef;
    private keyRef;
    private rcmRef;

    /* @ngInject */
    constructor(
        private $q: angular.IQService,
        private $firebaseObject,
        private $firebaseArray
    ) {
        this.abrsmRef = firebase.database().ref('/abrsm');
        this.formRef = firebase.database().ref('/form');
        this.henleRef = firebase.database().ref('/henle');
        this.keyRef = firebase.database().ref('/key');
        this.rcmRef = firebase.database().ref('/rcm');
    }

    getAbrsm(id) {
        if (id) {
            return this.$firebaseObject(this.abrsmRef.child(id)).$loaded();
        }
        return this.$q.resolve();
    }

    getAbrsms() {
        return this.$firebaseArray(this.abrsmRef).$loaded();
    }

    getForm(id) {
        if (id) {
            return this.$firebaseObject(this.formRef.child(id)).$loaded();
        }
        return this.$q.resolve();
    }

    getForms() {
        return this.$firebaseArray(this.formRef).$loaded();
    }

    getHenle(id) {
        if (id) {
            return this.$firebaseObject(this.henleRef.child(id)).$loaded();
        }
        return this.$q.resolve();
    }

    getHenles() {
        return this.$firebaseArray(this.henleRef).$loaded();
    }

    getKey(id) {
        if (id) {
            return this.$firebaseObject(this.keyRef.child(id)).$loaded();
        }
        return this.$q.resolve();
    }

    getKeys() {
        return this.$firebaseArray(this.keyRef).$loaded();
    }

    getRcm(id) {
        if (id) {
            return this.$firebaseObject(this.rcmRef.child(id)).$loaded();
        }
        return this.$q.resolve();
    }

    getRcms() {
        return this.$firebaseArray(this.rcmRef).$loaded();
    }
}
