(function() {
    'use strict';

    angular.module('app.home').controller('HomeController', HomeController);

    HomeController.$inject = ['Composition', 'account'];

    function HomeController(Composition, account) {

        this.account = account;

        Composition.find({
            filter: {
                limit: 10
            }
        }).$promise.then(function(compositions) {
            this.recommendations = compositions;
        }.bind(this));
    }
})();
