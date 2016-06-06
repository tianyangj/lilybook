/*(function () {
    'use strict';

    angular.module('app.composition').component('lbBookmark', {
        templateUrl: 'app/composition/components/bookmark.html',
        bindings: {
            composition: '<'
        },
        controller: BookmarkController
    });

    BookmarkController.$inject = ['Account', 'Bookmark', 'dialogService'];

    function BookmarkController(Account, Bookmark, dialogService) {

        this.$onInit = function () {
            Bookmark.checkBookmark({
                compositionId: this.composition.id
            }).$promise.then(function (response) {
                this.bookmarked = response.bookmarked;
            }.bind(this));
        }

        this.add = function ($event) {
            dialogService.showLogin($event).then(function () {
                return Account.bookmarks.create(
                    { id: Account.getCurrentId() },
                    { compositionId: this.composition.id }
                ).$promise;
            }.bind(this)).then(function () {
                this.bookmarked = true;
            }.bind(this));
        };
    }
})();*/

import { BookmarkService } from '../../data/bookmark.service';

class BookmarkController {

    bookmarked: boolean = false;
    user: any;

    private composition: any;

    /** @ngInject */
    constructor(
        private firebase: any,
        private $firebaseAuth,
        private bookmarkService: BookmarkService
    ) {
        this.user = $firebaseAuth().$getAuth();
        if (this.user) {
            bookmarkService.get(this.user.uid).then(bookmarks => {
                this.bookmarked = bookmarks.$indexFor(this.composition.$id) >= 0;
            });
        }
    }

    add() {
        if (this.user) {
            let path = '/user-bookmarks/' + this.user.uid + '/' + this.composition.$id;
            this.firebase.database().ref(path).set(true);
        }
    }
}

export let bookmarkComponent = {
    templateUrl: 'app/components/bookmark/bookmark.html',
    controller: BookmarkController,
    bindings: {
        composition: '<'
    }
};
