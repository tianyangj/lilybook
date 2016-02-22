(function () {
    'use strict';

    angular.module('app.splash').controller('LoginController', LoginController);

    LoginController.$inject = ['Account']

    function LoginController(Account) {

        var self = this;

        this.login = function () {
            console.log('login...', self.email, self.password)
            Account.login({
                email: self.email,
                password: self.password
            }).$promise.then(function (response) {
                console.log('suc', response);
            }).catch(function (response) {
                self.error = response.data.error;
            });
        }
    }
})();