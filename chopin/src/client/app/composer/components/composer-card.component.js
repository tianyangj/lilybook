(function() {
    'use strict';

    angular.module('app.composer').component('lbComposerCard', {
        templateUrl: 'app/composer/components/composer-card.html',
        bindings: {
            composer: '<'
        },
        controller: ComposerCardController
    });

    ComposerCardController.$inject = ['Account'];

    function ComposerCardController(Account) {

        this.subscribe = function() {
            alert('to subscribe...');
        };
    }

})();
