(function() {
    'use strict';

    angular.module('app.composition').controller('CompositionController', CompositionController);

    CompositionController.$inject = ['composition']

    function CompositionController(composition) {

        this.composition = composition;

        console.log(composition)
    }
})();