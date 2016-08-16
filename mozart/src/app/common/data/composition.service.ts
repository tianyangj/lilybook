export class CompositionDataService {

    private compositionRef;

    /* @ngInject */
    constructor(
        private $firebaseObject
    ) {
        this.compositionRef = firebase.database().ref('/compositions');
    }

    get(compositionId: string) {
        return this.$firebaseObject(this.compositionRef.child(compositionId));
    }

    getMany(compositionIds: string[]) {
        return compositionIds.map(compositionId => {
            return this.get(compositionId);
        });
    }

}
