(function () {
    'use strict';

    angular.module('app.core').component('lbRoot', {
        templateUrl: '/src/client/app/core/lb-root.html',
        controller: RootComponentController
    });

    RootComponentController.$inject = ['$scope', 'Account', 'LoopBackAuth']

    function RootComponentController($scope, Account, LoopBackAuth) {

        this.$onInit = function () {
            Account.getCurrent();
        };

        $scope.$watch(function () {
            return LoopBackAuth.currentUserData;
        }, function (user) {
            this.user = user;
        }.bind(this));
    }

})();
