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


class BookmarkController {

    composition: any;
    bookmarked: boolean = false;
    user: any;

    /** @ngInject */
    constructor(
        private firebase: any
    ) {
        this.user = firebase.auth().currentUser;
        if (this.user) {
            let path = '/user-bookmarks/' + this.user.uid + '/' + this.composition.id;
            firebase.database().ref(path).on('value', snapshot => {
                this.bookmarked = !!snapshot.val();
            });
        }
    }

    add() {
        if (this.user) {
            let bookmark = {};
            bookmark[this.composition.id] = true;
            this.firebase.database().ref('/user-bookmarks/' + this.user.uid).set(bookmark);
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
