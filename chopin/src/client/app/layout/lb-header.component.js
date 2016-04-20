(function () {
    'use strict';

    angular.module('app.layout').component('lbHeader', {
        templateUrl: 'app/layout/lb-header.html',
        controller: HeaderComponentController
    });

    HeaderComponentController.$inject = ['$rootScope', '$state', '$mdSidenav', 'Account', 'LoopBackAuth'];

    function HeaderComponentController($rootScope, $state, $mdSidenav, Account, LoopBackAuth) {

        this.$onInit = function () {
            this.isAuthenticated = Account.isAuthenticated();
        };

        this.toggleSidenav = function (sidenavId) {
            $mdSidenav(sidenavId).toggle();
        };

        this.logout = function () {
            Account.logout().$promise.then(function () {
                $state.go('splash');
            });
        };

        this.todo = function () {
            alert('todo');
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
