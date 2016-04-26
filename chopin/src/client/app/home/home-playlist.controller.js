(function () {
    'use strict';

    angular.module('app.home').controller('HomePlaylistController', HomePlaylistController);

    HomePlaylistController.$inject = ['Account']

    function HomePlaylistController(Account) {

        Account.bookmarks().$promise.then(function (playlists) {
            this.playlists = playlists;
        }.bind(this));
    }

})();