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

import { BookmarkDataService } from '../data/bookmark.service';

class BookmarkComponentController {

    user: any;
    bookmark: any;
    bookmarked: boolean = false;

    private composition: any;

    /** @ngInject */
    constructor(
        private $firebaseAuth,
        private bookmarkDataService: BookmarkDataService
    ) {
        this.user = $firebaseAuth().$getAuth();
        if (this.user) {
            this.bookmark = this.bookmarkDataService.get(this.user.uid, this.composition.$id);
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

export const BookmarkComponent = {
    templateUrl: 'app/common/bookmark/bookmark.html',
    controller: BookmarkComponentController,
    bindings: {
        composition: '<'
    }
};
