export class ComposerDataService {

    private composersRef;
    private compositionsRef;

    /* @ngInject */
    constructor(
        private $firebaseObject,
        private $firebaseArray
    ) {
        this.composersRef = firebase.database().ref('/composers');
        this.compositionsRef = firebase.database().ref('/compositions');
    }

    get(composerId: string) {
        return this.$firebaseObject(this.composersRef.child(composerId));
    }

    getAll() {
        return this.$firebaseArray(this.composersRef);
    }

    getFeaturedComposers(limit = 5) {
        // return items where compositionCount is greater than or equal to 1 with limit
        const query = this.composersRef.startAt(1).orderByChild('compositionCount').limitToLast(limit);
        return this.$firebaseArray(query).$loaded().then(composers => {
            // order by compositionCount descending
            composers.reverse();
            // return composers with first 10 compositions
            return composers.map(composer => {
                return {
                    composerId: composer.$id,
                    name: composer.name,
                    image: composer.image,
                    compositions: Object.keys(composer.compositions).slice(0, 10).map(compositionId => {
                        return this.$firebaseObject(this.compositionsRef.child(compositionId));
                    })
                };
            });
        });
    }
}
