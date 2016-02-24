(function () {
    'use strict';

    angular.module('app.core').component('lbRoot', {
        templateUrl: '/src/client/app/core/lb-root.html',
        controller: RootComponentController
    });

    RootComponentController.$inject = ['Account']

    function RootComponentController(Account) {
        Account.getCurrent().$promise.then(function (user) {
            this.user = user;
        }.bind(this));
    }

})();
