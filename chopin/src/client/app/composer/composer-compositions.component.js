(function () {
    'use strict';

    angular.module('app.composer').component('lbComposerCompositions', {
        templateUrl: 'app/composer/composer-compositions.html',
        bindings: {
            composer: '<'
        },
        controller: ComposerCompositionsController
    });

    ComposerCompositionsController.$inject = ['$state', '$mdSidenav', 'Composer'];

    function ComposerCompositionsController($state, $mdSidenav, Composer) {

        console.log('ComposerCompositionsController', this.composer)

        Composer.compositions({
            id: this.composer.id
        }).$promise.then(function (compositions) {
            this.compositions = compositions
        }.bind(this));
    }

})();
