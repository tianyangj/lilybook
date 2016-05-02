export class HomeBookmarksController {

    bookmarks: any[];

    /* @ngInject */
    constructor(
        private Account: any
    ) {
        this.Account.bookmarks().$promise.then((bookmarks: any) => {
            this.bookmarks = bookmarks;
        });
    }

}
