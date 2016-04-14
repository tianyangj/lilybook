(function() {
    'use strict';

    angular.module('app.composer', ['app.core']);

    angular.module('app.composer').config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        $stateProvider.state('composer', {
            url: '/composer/:vanity',
            templateUrl: 'app/composer/composer.html',
            controller: 'ComposerController',
            controllerAs: '$ctrl',
            resolve: {
                composer: getComposer
            }
        });
        $stateProvider.state('composers', {
            url: '/composers',
            templateUrl: 'app/composer/composers.html',
            controller: 'ComposersController',
            controllerAs: '$ctrl',
            resolve: {
                composers: getComposers
            }
        });
    }

    getComposer.$inject = ['$stateParams', 'Composer']

    function getComposer($stateParams, Composer) {
        return Composer.findById({
            id: $stateParams.vanity
        }).$promise;
    }

    getComposers.$inject = ['Composer']

    function getComposers(Composer) {
        return Composer.find().$promise;
    }
})();
