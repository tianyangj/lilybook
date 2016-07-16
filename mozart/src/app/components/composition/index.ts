import { CompositionDataService } from '../../common/data/composition.service';
import { CompositionComponentView } from './composition.component';
import { CompositionSheetComponentView } from './composition-sheet.component';
import { CompositionFabComponent } from './composition-fab.component';
import { CompositionFabBookmarkComponent } from './composition-fab-bookmark.component';

export const CompositionModule = angular
    .module('lilybook.composition', [
        'hm.readmore'
    ])
    .component('lbCompositionView', CompositionComponentView)
    .component('lbCompositionSheetView', CompositionSheetComponentView)
    .component('lbCompositionFab', CompositionFabComponent)
    .component('lbCompositionFabBookmark', CompositionFabBookmarkComponent)
    .config(($stateProvider) => {
        $stateProvider
            .state('composition', {
                url: '/composition/:id',
                component: 'lbCompositionView',
                resolve: {
                    composition: ($stateParams, compositionDataService: CompositionDataService) => compositionDataService.get($stateParams.id).$loaded()
                }
            });
        $stateProvider
            .state('composition.sheet', {
                url: '/sheetmusic',
                component: 'lbCompositionSheetView',
                resolve: {
                    composition: composition => composition
                }
            });
        $stateProvider
            .state('composition.videos', {
                url: '/videos',
                template: '<div>videos</div>'
            });
        $stateProvider
            .state('composition.discuss', {
                url: '/discuss',
                template: '<div>questions and answers</div>'
            });
    })
    .name;
