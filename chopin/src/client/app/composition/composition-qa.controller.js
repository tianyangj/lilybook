(function() {
    'use strict';

    angular.module('app.composition').controller('CompositionQAController', CompositionQAController);

    CompositionQAController.$inject = ['composition']

    function CompositionQAController(composition) {

        this.composition = composition;
    }
})();