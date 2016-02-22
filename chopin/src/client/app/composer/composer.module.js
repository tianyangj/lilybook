(function () {
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
    }

    getComposer.$inject = ['$stateParams', 'Composer']

    function getComposer($stateParams, Composer) {
        return Composer.findOne({
            filter: { where: { vanity: $stateParams.vanity } }
        }).$promise;
    }
})();
