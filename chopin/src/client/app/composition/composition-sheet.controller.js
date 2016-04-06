(function() {
    'use strict';

    angular.module('app.composition').controller('CompositionSheetController', CompositionSheetController);

    CompositionSheetController.$inject = ['composition', '$scope']

    function CompositionSheetController(composition, $scope) {

        this.sheet = composition.sheet;
        this.composition = composition;

        $scope.$parent.$ctrl.collapseHero();

        if (this.sheet) {
            this.pdfUrl = this.sheet.pdf + '/preview';
        }
    }
})();