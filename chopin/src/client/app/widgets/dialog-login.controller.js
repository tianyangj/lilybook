(function () {
    'use strict';

    angular.module('app.widgets').controller('DialogLoginController', DialogLoginController);

    DialogLoginController.$inject = ['$mdDialog', 'Account'];

    function DialogLoginController($mdDialog, Account) {

        this.close = function () {
            $mdDialog.cancel();
        }

        this.login = function () {
            Account.login({
                email: this.email,
                password: this.password
            }).$promise.then(function (response) {
                $mdDialog.hide(response);
            }).catch(function (response) {
                this.error = response.data.error;
            }.bind(this));
        }
    }
})();
