(function () {
    'use strict';

    angular.module('app.composition').component('lbCompositionPlaylist', {
        templateUrl: 'app/composition/composition-playlist.html',
        bindings: {
            composition: '<'
        },
        controller: CompositionPlaylistController
    });

    function CompositionPlaylistController() {

        this.add = function () {
            console.log('todo, add to playlist', this.composition);
        };
    }
})();
