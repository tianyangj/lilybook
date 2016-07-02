import { CompositionDataService } from '../common/data/composition.service';
import { CompositionController } from './composition.controller';
import { CompositionSheetController } from './composition-sheet.controller';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('app.composition', {
        url: '/composition/:id',
        templateUrl: 'app/composition/composition.html',
        controller: CompositionController,
        controllerAs: '$ctrl',
        resolve: {
            composition: ['$stateParams', 'compositionService', ($stateParams, compositionService: CompositionDataService) => {
                return compositionService.get($stateParams.id).$loaded();
            }]
        }
    });

    $stateProvider.state('app.composition.sheet', {
        url: '/sheetmusic',
        templateUrl: 'app/composition/composition-sheet-a.html',
        controller: CompositionSheetController,
        controllerAs: '$ctrl'
    });

    $stateProvider.state('app.composition.videos', {
        url: '/videos',
        template: '<div>videos</div>'
    });

    $stateProvider.state('app.composition.discuss', {
        url: '/discuss',
        template: '<div>questions and answers</div>'
    });
}
