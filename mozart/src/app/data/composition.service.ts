export class CompositionService {

    private compositionRef;

    /* @ngInject */
    constructor(
        private $firebaseObject,
        private $firebaseArray,
        private firebase
    ) {
        this.compositionRef = firebase.database().ref('/compositions');
    }

    get(compositionId: string) {
        return this.$firebaseObject(this.compositionRef.child(compositionId)).$loaded();
    }

}
