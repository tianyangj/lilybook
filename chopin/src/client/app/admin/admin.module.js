(function () {
    'use strict';

    angular.module('app.admin', ['app.core', 'xeditable']);

    angular.module('app.admin').config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        $stateProvider.state('admin', {
            url: '/admin',
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController',
            controllerAs: '$ctrl',
            authentication: true,
            admin: true
        });
        $stateProvider.state('admin.composers', {
            url: '/composers',
            templateUrl: 'app/admin/composers/admin-composers.html',
            controller: 'AdminComposersController',
            controllerAs: '$ctrl'
        });
    }

})();
