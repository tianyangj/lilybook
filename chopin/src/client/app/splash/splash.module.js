(function () {
    'use strict';

    angular.module('app.splash', ['app.core']);

    angular.module('app.splash').config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        $stateProvider.state('splash', {
            url: '/',
            templateUrl: 'app/splash/splash.html',
            controller: 'SplashController',
            controllerAs: '$ctrl'
        });
        $stateProvider.state('login', {
            url: '/login',
            params: { next: null },
            templateUrl: 'app/splash/login.html',
            controller: 'LoginController',
            controllerAs: '$ctrl'
        });
    }
})();
