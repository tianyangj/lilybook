(function () {
    'use strict';

    angular.module('app.splash').controller('LoginController', LoginController);

    function LoginController() {

        var self = this;

        this.logIn = function () {
            console.log('haha', self.email, self.password)
        }
    }
})();