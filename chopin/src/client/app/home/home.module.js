(function() {
    'use strict';

    angular.module('app.home', ['app.core']);

    angular.module('app.home').config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: '$ctrl',
            resolve: {
                account: ['Account', function(Account) {
                    return Account.getCurrent().$promise;
                }]
            }
        });
    }

})();
