(function() {
    'use strict';

    angular.module('app.layout').component('lbFooter', {
        templateUrl: '/src/client/app/layout/lb-footer.html',
        bindings: {
            user: '<'
        },
        controller: FooterComponentController
    });

    FooterComponentController.$inject = ['$state', '$mdSidenav', 'Account'];

    function FooterComponentController($state, $mdSidenav, Account) {

        this.toggleSidenav = function(sidenavId) {
            $mdSidenav(sidenavId).toggle();
        };

        this.logout = function() {
            Account.logout().$promise.then(function() {
                $state.go('splash');
            });
        }
    }

})();
