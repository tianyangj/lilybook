(function() {
    'use strict';

    angular.module('app.composition', [
        'app.core',
        'angular-carousel',
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
        $stateProvider.state('composition.sheet', {
            url: '/sheet',
            templateUrl: 'app/composition/composition-sheet.html',
            controller: 'CompositionSheetController',
            controllerAs: '$ctrl'
        });
        $stateProvider.state('composition.qa', {
            url: '/qa',
            templateUrl: 'app/composition/composition-qa.html',
            controller: 'CompositionQAController',
            controllerAs: '$ctrl'
        });
    }

    getComposition.$inject = ['$q', '$stateParams', 'Composition', 'definitionService']

    function getComposition($q, $stateParams, Composition, definitionService) {
        return $q.all({
            composition: Composition.findById({ id: $stateParams.id }).$promise,
            composer: Composition.composer({ id: $stateParams.id }).$promise,
            keys: definitionService.getKeys(),
            forms: definitionService.getForms(),
            abrsms: definitionService.getABRSMs(),
            rcms: definitionService.getRCMs(),
            henles: definitionService.getHenles()
        }).then(function(response) {
            var composition = response.composition;
            composition.composer = response.composer;
            composition.key = response.keys.filter(function(key) {
                return key.id === composition.key;
            })[0];
            composition.form = response.forms.filter(function(form) {
                return form.id === composition.form;
            })[0];
            composition.abrsm = response.abrsms.filter(function(abrsm) {
                return abrsm.id === composition.abrsm;
            })[0];
            composition.rcm = response.rcms.filter(function(rcm) {
                return rcm.id === composition.rcm;
            })[0];
            composition.henle = response.henles.filter(function(henle) {
                return henle.id === composition.henle;
            })[0];
            return composition;
        });
    }
})();
