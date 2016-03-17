(function() {
    'use strict';

    angular.module('app.home').controller('HomePlaylistController', HomePlaylistController);

    HomePlaylistController.$inject = ['Account', 'account']

    function HomePlaylistController(Account, account) {

        Account.playlists({
            id: account.id
        }).$promise.then(function(playlists) {
            this.playlists = playlists;
        }.bind(this));

        console.log('HomePlaylistController', account)
    }
})();