export class ComposerService {

    private composerRef;

    /* @ngInject */
    constructor(
        private $firebaseObject,
        private $firebaseArray,
        private firebase
    ) {
        this.composerRef = firebase.database().ref('/composers');
    }

    get(composerId: string) {
        return this.$firebaseObject(this.composerRef.child(composerId)).$loaded();
    }

    getAll() {
        return this.$firebaseArray(this.composerRef).$loaded();
    }
}
