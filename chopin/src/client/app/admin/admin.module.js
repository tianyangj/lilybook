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
        $stateProvider.state('admin.compositions', {
            url: '/compositions',
            templateUrl: 'app/admin/compositions/admin-compositions.html',
            controller: 'AdminCompositionsController',
            controllerAs: '$ctrl'
        });
        $stateProvider.state('admin.compositions-edit', {
            url: '/compositions/:vanity',
            templateUrl: 'app/admin/compositions/admin-compositions-edit.html',
            controller: 'AdminCompositionsEditController',
            controllerAs: '$ctrl'
        });
        $stateProvider.state('admin.forms', {
            url: '/forms',
            templateUrl: 'app/admin/forms/admin-forms.html',
            controller: 'AdminFormsController',
            controllerAs: '$ctrl'
        });
    }

})();
