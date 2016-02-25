(function () {
    'use strict';

    angular.module('app.layout').component('lbHeader', {
        templateUrl: '/src/client/app/layout/lb-header.html',
        bindings: {
            user: '<'
        },
        controller: HeaderComponentController
    });

    HeaderComponentController.$inject = ['$state', '$mdSidenav', 'Account'];

    function HeaderComponentController($state, $mdSidenav, Account) {

        this.toggleSidenav = function (sidenavId) {
            $mdSidenav(sidenavId).toggle();
        };

        this.logout = function () {
            Account.logout().$promise.then(function () {
                $state.go('splash');
            });
        }
    }

})();
