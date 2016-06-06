export class BookmarkService {

    private bookmarkRef;

    /* @ngInject */
    constructor(
        private $firebaseArray,
        private firebase
    ) {
        this.bookmarkRef = firebase.database().ref('/user-bookmarks');
    }

    get(userId: string) {
        return this.$firebaseArray(this.bookmarkRef.child(userId)).$loaded();
    }
}
