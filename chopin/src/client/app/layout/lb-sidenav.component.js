(function () {
    'use strict';

    angular.module('app.layout').component('lbSidenav', {
        templateUrl: 'app/layout/lb-sidenav.html',
        controller: SidenavComponentController
    });

    SidenavComponentController.$inject = ['$rootScope', '$mdSidenav', 'Account', 'LoopBackAuth'];

    function SidenavComponentController($rootScope, $mdSidenav, Account, LoopBackAuth) {

        this.$onInit = function () {
            this.isAuthenticated = Account.isAuthenticated();
        };

        this.close = function () {
            $mdSidenav('left').close();
        };

        $rootScope.$watch(function () {
            return LoopBackAuth.currentUserData;
        }, function (newUser, oldUser) {
            if (newUser !== oldUser) {
                this.$onInit();
            }
        }.bind(this));
    }

})();
