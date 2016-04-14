(function() {
    'use strict';

    angular.module('app.composer').controller('ComposersController', ComposersController);

    ComposersController.$inject = ['$state', 'composers']

    function ComposersController($state, composers) {

        this.composers = composers;

        this.goto = function(composer) {
            $state.go('composer', { vanity: composer.id });
        }
    }
})();