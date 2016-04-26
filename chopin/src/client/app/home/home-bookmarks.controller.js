(function () {
    'use strict';

    angular.module('app.home').controller('HomeBookmarksController', HomeBookmarksController);

    HomeBookmarksController.$inject = ['Account']

    function HomeBookmarksController(Account) {

        Account.bookmarks().$promise.then(function (bookmarks) {
            this.bookmarks = bookmarks;
        }.bind(this));
    }

})();