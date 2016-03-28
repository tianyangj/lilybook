(function () {
    'use strict';

    angular.module('app.composer').component('lbComposerHero', {
        templateUrl: 'app/composer/components/composer-hero.html',
        bindings: {
            composer: '<'
        },
        controller: ComposerHeroController
    });

    ComposerHeroController.$inject = ['$state', '$mdSidenav', 'Account'];

    function ComposerHeroController($state, $mdSidenav, Account) {

        console.log('lbComposerHero', this.composer)
    }

})();
