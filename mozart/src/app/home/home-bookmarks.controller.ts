export class HomeBookmarksController {

    bookmarks: any[];
    user: any;

    /* @ngInject */
    constructor(
        private firebase: any
    ) {
        this.user = firebase.auth().currentUser;
        firebase.database().ref('/user-bookmarks/' + this.user.uid).on('value', snapshot => {
            this.bookmarks = snapshot.val();
            console.log(this.bookmarks)
        });
    }

}
