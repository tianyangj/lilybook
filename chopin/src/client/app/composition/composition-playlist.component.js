(function() {
    'use strict';

    angular.module('app.composition').component('lbCompositionPlaylist', {
        templateUrl: 'app/composition/composition-playlist.html',
        bindings: {
            composition: '<'
        },
        controller: CompositionPlaylistController
    });

    CompositionPlaylistController.$inject = ['LoopBackAuth', 'Playlist'];

    function CompositionPlaylistController(LoopBackAuth, Playlist) {

        this.add = function() {
            console.log('todo, add to playlist', this.composition, Playlist);
            Playlist.create({
                compositionId: this.composition.id,
                userId: LoopBackAuth.currentUserId
            });

            /*Playlist.find().$promise.then(function(playlists) {
                console.log(playlists)
            })*/
        };
    }
})();
