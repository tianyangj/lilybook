(function() {
    'use strict';

    angular.module('app.composer').component('lbComposerSubscribe', {
        templateUrl: 'app/composer/components/composer-subscribe.html',
        bindings: {
            composer: '<'
        },
        controller: ComposerSubscribeController
    });

    ComposerSubscribeController.$inject = ['Account'];

    function ComposerSubscribeController(Account) {

        this.subscribe = function() {
            alert('to subscribe...');
        }
    }

})();
