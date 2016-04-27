(function () {
    'use strict';

    angular.module('app.composition').component('lbBookmark', {
        templateUrl: 'app/composition/components/bookmark.html',
        bindings: {
            composition: '<'
        },
        controller: BookmarkController
    });

    BookmarkController.$inject = ['Account', 'Playlist', 'dialogService'];

    function BookmarkController(Account, Playlist, dialogService) {

        this.$onInit = function () {
            Playlist.checkBookmark({
                compositionId: this.composition.id
            }).$promise.then(function (response) {
                this.bookmarked = response.bookmarked;
            }.bind(this));
        }

        this.add = function ($event) {
            dialogService.showLogin($event).then(function () {
                return Account.playlists.create(
                    { id: Account.getCurrentId() },
                    { compositionId: this.composition.id }
                ).$promise;
            }.bind(this)).then(function () {
                this.bookmarked = true;
            }.bind(this));
        };
    }
})();

//{"email":"tianyangj@gmail.com","password":"qwer1234"}