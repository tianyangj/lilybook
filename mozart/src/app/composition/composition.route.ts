import { resolver } from '../resolvers';
import { CompositionController } from './composition.controller';
import { CompositionSheetController } from './composition-sheet.controller';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('composition', {
        url: '/composition/:id',
        templateUrl: 'app/composition/composition.html',
        controller: CompositionController,
        controllerAs: '$ctrl',
        resolve: {
            composition: resolver.getComposition
        }
    });

    $stateProvider.state('composition.sheet', {
        url: '/sheetmusic',
        templateUrl: 'app/composition/composition-sheet-a.html',
        controller: CompositionSheetController,
        controllerAs: '$ctrl'
    });

    $stateProvider.state('composition.videos', {
        url: '/videos',
        template: '<div>videos</div>'
    });

    $stateProvider.state('composition.qa', {
        url: '/qa',
        template: '<div>questions and answers</div>'
    });
}
