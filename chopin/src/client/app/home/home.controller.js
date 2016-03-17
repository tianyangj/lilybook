(function() {
    'use strict';

    angular.module('app.home').controller('HomeController', HomeController);

    HomeController.$inject = ['account'];

    function HomeController(account) {

        this.account = account;
    }
})();
