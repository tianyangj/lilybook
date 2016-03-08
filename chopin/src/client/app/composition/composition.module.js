(function() {
    'use strict';

    angular.module('app.composition', [
        'app.core',
        'com.2fdevs.videogular',
        'com.2fdevs.videogular.plugins.controls',
        'info.vietnamcode.nampnq.videogular.plugins.youtube'
    ]);

    angular.module('app.composition').config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        $stateProvider.state('composition', {
            url: '/composition/:id',
            templateUrl: 'app/composition/composition.html',
            controller: 'CompositionController',
            controllerAs: '$ctrl',
            resolve: {
                composition: getComposition
            }
        });
    }

    getComposition.$inject = ['$stateParams', 'Composition']

    function getComposition($stateParams, Composition) {
        return Composition.findById({
            id: $stateParams.id
        }).$promise;
    }
})();
