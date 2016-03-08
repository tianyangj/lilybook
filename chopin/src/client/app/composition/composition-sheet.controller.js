(function () {
    'use strict';

    angular.module('app.composition').controller('CompositionSheetController', CompositionSheetController);

    CompositionSheetController.$inject = ['composition']

    function CompositionSheetController(composition) {

        this.composition = composition;
        console.log('CompositionSheetController', composition)
    }
})();