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

    user: any;
    bookmark: any;
    bookmarked: boolean = false;

    private composition: any;

    /** @ngInject */
    constructor(
        private firebase: any,
        private $firebaseAuth,
        private bookmarkService: BookmarkService
    ) {
        this.user = $firebaseAuth().$getAuth();
        this.bookmark = this.bookmarkService.get(this.user.uid, this.composition.$id);
        if (this.user) {
            this.bookmark.$watch(() => {
                this.bookmark.$loaded().then(data => {
                    this.bookmarked = data.$value;
                });
            });
        }
    }

    add() {
        if (this.user) {
            this.bookmark.$value = true;
            this.bookmark.$save();
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
