(function() {
    'use strict';

    angular.module('app.composition').component('lbCompositionPlaylist', {
        templateUrl: 'app/composition/components/composition-playlist.html',
        bindings: {
            composition: '<'
        },
        controller: CompositionPlaylistController
    });

    CompositionPlaylistController.$inject = ['Account', 'dialogService'];

    function CompositionPlaylistController(Account, dialogService) {

        this.$onInit = function() {
            if (Account.isAuthenticated()) {
                Account.playlists({
                    id: Account.getCurrentId(),
                    filter: {
                        fields: 'compositionId'
                    }
                }).$promise.then(function(playlists) {
                    this.inPlaylist = playlists.map(function(playlist) {
                        return playlist.compositionId;
                    }).indexOf(this.composition.id) > -1;
                }.bind(this));
            }
        }

        this.add = function($event) {
            dialogService.showLogin($event).then(function() {
                return Account.playlists.create(
                    { id: Account.getCurrentId() },
                    { compositionId: this.composition.id }
                ).$promise;
            }.bind(this)).then(function() {
                this.inPlaylist = true;
            }.bind(this));
        };
    }
})();

//{"email":"tianyangj@gmail.com","password":"qwer1234"}