(function () {
    'use strict';

    angular.module('app.splash').controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$stateParams', 'Account']

    function LoginController($state, $stateParams, Account) {

        var self = this;

        this.login = function () {
            Account.login({
                email: self.email,
                password: self.password
            }).$promise.then(function (response) {
                console.log('login success...', response);
                if ($stateParams.next) {
                    $state.go($stateParams.next.name);
                }
            }).catch(function (response) {
                self.error = response.data.error;
            });
        }
    }
})();