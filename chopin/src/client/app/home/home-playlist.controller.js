(function() {
    'use strict';

    angular.module('app.home').controller('HomePlaylistController', HomePlaylistController);

    HomePlaylistController.$inject = ['Account', 'Composition', 'account']

    function HomePlaylistController(Account, Composition, account) {

        Account.playlists({
            id: account.id
        }).$promise.then(function(playlists) {
            this.playlists = playlists;
            return playlists.map(function(playlist) {
                return playlist.compositionId;
            });
        }.bind(this)).then(function(compositionIds) {
            return Composition.find({
                filter: {
                    where: {
                        id: {
                            inq: compositionIds
                        }
                    }
                }
            }).$promise.then(function(compositions) {
                return compositions.reduce(function(prev, curr) {
                    prev[curr.id] = curr;
                    return prev;
                }, {});
            });
        }).then(function(compositions) {
            this.playlists.forEach(function(playlist) {
                playlist.composition = compositions[playlist.compositionId];
            });
        }.bind(this));
    }

})();