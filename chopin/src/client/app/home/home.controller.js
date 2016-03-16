(function() {
    'use strict';

    angular.module('app.home').controller('HomeController', HomeController);

    HomeController.$inject = ['Account', 'account'];

    function HomeController(Account, account) {

        this.account = account;

        Account.playlists({
            id: Account.getCurrentId()
        }).$promise.then(function(playlists) {
            this.playlists = playlists;
        }.bind(this));
    }
})();
