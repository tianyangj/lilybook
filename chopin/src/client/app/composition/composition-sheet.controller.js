(function() {
    'use strict';

    angular.module('app.composition').controller('CompositionSheetController', CompositionSheetController);

    CompositionSheetController.$inject = ['composition', '$scope']

    function CompositionSheetController(composition, $scope) {

        this.composition = composition;

        console.log('CompositionSheetController init...', $scope.$parent.$ctrl);

        $scope.$parent.$ctrl.toggleHeight();
    }
})();