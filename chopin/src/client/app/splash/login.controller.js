(function () {
    'use strict';

    angular.module('app.splash').controller('LoginController', LoginController);

    function LoginController() {

        var self = this;

        this.login = function () {
            console.log('login...', self.email, self.password)
        }
    }
})();