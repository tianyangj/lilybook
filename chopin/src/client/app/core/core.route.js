(function() {
    'use strict';

    angular.module('app.core').config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function routerConfig($stateProvider, $urlRouterProvider) {

        $stateProvider.state('404', {
            url: '/404',
            templateUrl: 'app/core/404.html'
        });

        $urlRouterProvider.otherwise('/');
    }

})();
