(function() {
    'use strict';

    angular.module('app.composition').component('lbCompositionPlaylist', {
        templateUrl: 'app/composition/composition-playlist.html',
        bindings: {
            composition: '<'
        },
        controller: CompositionPlaylistController
    });

    CompositionPlaylistController.$inject = ['LoopBackAuth', 'Playlist', 'dialogService'];

    function CompositionPlaylistController(LoopBackAuth, Playlist, dialogService) {

        /*this.$onInit = function() {
            Playlist.findById({
                filter: {
                    where: {
                        compositionId: this.composition.id,
                        userId: LoopBackAuth.currentUserId
                    }
                }
            }).$promise.then(function() {
                console.log('haha', arguments)
            })
        }*/

        this.add = function($event) {
            dialogService.showLogin($event).then(function() {
                return Playlist.create({
                    compositionId: this.composition.id,
                    userId: LoopBackAuth.currentUserId
                }).$promise;
            }.bind(this)).then(function() {
                this.inPlaylist = true;
            }.bind(this));
        };
    }
})();

//{"email":"tianyangj@gmail.com","password":"qwer1234"}