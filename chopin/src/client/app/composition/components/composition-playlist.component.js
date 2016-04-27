(function () {
    'use strict';

    angular.module('app.composition').component('lbCompositionPlaylist', {
        templateUrl: 'app/composition/components/composition-playlist.html',
        bindings: {
            composition: '<'
        },
        controller: CompositionPlaylistController
    });

    CompositionPlaylistController.$inject = ['Account', 'Playlist', 'dialogService'];

    function CompositionPlaylistController(Account, Playlist, dialogService) {

        this.$onInit = function () {
            Playlist.checkBookmark({
                compositionId: this.composition.id
            }).$promise.then(function (response) {
                this.inPlaylist = response.bookmarked;
            }.bind(this));
        }

        this.add = function ($event) {
            dialogService.showLogin($event).then(function () {
                return Account.playlists.create(
                    { id: Account.getCurrentId() },
                    { compositionId: this.composition.id }
                ).$promise;
            }.bind(this)).then(function () {
                this.inPlaylist = true;
            }.bind(this));
        };
    }
})();

//{"email":"tianyangj@gmail.com","password":"qwer1234"}