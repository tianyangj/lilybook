(function() {
    'use strict';

    angular.module('app.composition').component('lbCompositionPlaylist', {
        templateUrl: 'app/composition/composition-playlist.html',
        bindings: {
            composition: '<'
        },
        controller: CompositionPlaylistController
    });

    CompositionPlaylistController.$inject = ['Playlist'];

    function CompositionPlaylistController(Playlist) {

        this.add = function() {
            console.log('todo, add to playlist', this.composition, Playlist);
            Playlist.create({
                compositionId: this.composition.id
            });

            /*Playlist.find().$promise.then(function(playlists) {
                console.log(playlists)
            })*/
        };
    }
})();
