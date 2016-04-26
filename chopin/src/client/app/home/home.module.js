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
        $stateProvider.state('home.profile', {
            url: '/profile',
            template: 'profile goes here',
            //controller: 'HomeProfileController',
            //controllerAs: '$ctrl'
        });
        $stateProvider.state('home.bookmarks', {
            url: '/bookmarks',
            templateUrl: 'app/home/home-bookmarks.html',
            controller: 'HomeBookmarksController',
            controllerAs: '$ctrl'
        });
        $stateProvider.state('home.repertoire', {
            url: '/repertoire',
            templateUrl: 'app/home/home-repertoire.html',
            controller: 'HomerRepertoireController',
            controllerAs: '$ctrl'
        });
    }

})();
