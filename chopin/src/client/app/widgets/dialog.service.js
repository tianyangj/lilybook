(function () {
    'use strict';

    angular.module('app.widgets').factory('dialogService', dialogService);

    dialogService.$inject = ['$q', '$mdDialog', 'Account'];

    function dialogService($q, $mdDialog, Account) {

        var service = {
            showLogin: showLogin
        };

        return service;

        function showLogin($event) {
            if (Account.isAuthenticated()) {
                return $q.resolve();
            }
            return $mdDialog.show({
                templateUrl: 'app/widgets/dialog-login.html',
                controller: 'DialogLoginController',
                controllerAs: '$ctrl',
                bindToController: true,
                clickOutsideToClose: true,
                targetEvent: $event
            });
        }
    }
})();
