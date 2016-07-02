export class BookmarkDataService {

    private bookmarkRef;

    /* @ngInject */
    constructor(
        private $firebaseObject,
        private $firebaseArray
    ) {
        this.bookmarkRef = firebase.database().ref('/user-bookmarks');
    }

    get(userId: string, compositionId: string) {
        return this.$firebaseObject(this.bookmarkRef.child(userId).child(compositionId));
    }

    getAll(userId: string) {
        return this.$firebaseArray(this.bookmarkRef.child(userId));
    }
}
