(function () {
    'use strict';

    angular.module('app.composition').controller('CompositionController', CompositionController);

    CompositionController.$inject = ['Composition', 'composition']

    function CompositionController(Composition, composition) {

        this.composition = composition;

        Composition.composer({
            id: this.composition.id
        }).$promise.then(function (composer) {
            this.composer = composer;
        }.bind(this));
        
        //composition.composer()
        console.log(composition)
    }
})();