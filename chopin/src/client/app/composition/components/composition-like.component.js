(function () {
    'use strict';

    angular.module('app.composition').component('lbCompositionLike', {
        templateUrl: 'app/composition/components/composition-like.html',
        bindings: {
            composition: '<'
        },
        controller: CompositionLikeController
    });

    function CompositionLikeController() {

        this.like = function () {
            console.log('todo, like', this.composition);
        };
    }
})();
