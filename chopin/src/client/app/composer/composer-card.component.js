(function () {
    'use strict';

    angular.module('app.composer').component('lbComposerCard', {
        templateUrl: 'app/composer/composer-card.html',
        bindings: {
            composer: '<'
        },
        controller: ComposerCardController
    });

    ComposerCardController.$inject = ['$state', '$mdSidenav', 'Account'];

    function ComposerCardController($state, $mdSidenav, Account) {

        console.log('lbComposerCard', this.composer)
    }

})();
