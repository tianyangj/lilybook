export class ComposerDataService {

    private composerRef;

    /* @ngInject */
    constructor(
        private $firebaseObject,
        private $firebaseArray
    ) {
        this.composerRef = firebase.database().ref('/composers');
    }

    get(composerId: string) {
        return this.$firebaseObject(this.composerRef.child(composerId));
    }

    getAll() {
        return this.$firebaseArray(this.composerRef);
    }
}
