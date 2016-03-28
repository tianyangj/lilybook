(function() {
    'use strict';

    angular.module('app.composition').controller('CompositionController', CompositionController);

    CompositionController.$inject = ['composition']

    function CompositionController(composition) {

        this.composition = composition;

        this.height = '300px';

        this.toggleHero = function() {
            this.height = this.height === '300px' ? '50px' : '300px';
        };

        this.collapseHero = function() {
            if (this.height === '300px') {
                this.height = '50px';
            }
        };
    }
})();