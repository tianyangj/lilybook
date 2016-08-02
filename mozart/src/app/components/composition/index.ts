import { CompositionDataService } from '../../common/data/composition.service';

import { CompositionComponentView } from './composition.component';
import { CompositionDetailsComponentView } from './composition-details.component';
import { CompositionSheetComponentView } from './composition-sheet.component';
import { CompositionVideosComponentView } from './composition-videos.component';
import { CompositionDiscussionsComponentView } from './composition-discussions.component';

import { CompositionCollectionComponent } from './composition-collection.component';
import { CompositionLikeComponent } from './composition-like.component';

export const CompositionModule = angular
    .module('lilybook.composition', [
        'hm.readmore',
        'toastr'
    ])
    .component('lbCompositionView', CompositionComponentView)
    .component('lbCompositionDetailsView', CompositionDetailsComponentView)
    .component('lbCompositionSheetView', CompositionSheetComponentView)
    .component('lbCompositionVideosView', CompositionVideosComponentView)
    .component('lbCompositionDiscussionsView', CompositionDiscussionsComponentView)
    .component('lbCompositionCollection', CompositionCollectionComponent)
    .component('lbCompositionLike', CompositionLikeComponent)
    .config(($stateProvider) => {
        $stateProvider
            .state('composition', {
                url: '/composition/:id',
                component: 'lbCompositionView',
                resolve: {
                    composition: ($stateParams, compositionDataService: CompositionDataService) => compositionDataService.get($stateParams.id).$loaded()
                },
                redirectTo: 'composition.details'
            });
        $stateProvider
            .state('composition.details', {
                component: 'lbCompositionDetailsView',
                resolve: {
                    composition: composition => composition
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
                component: 'lbCompositionVideosView',
                resolve: {
                    composition: composition => composition
                }
            });
        $stateProvider
            .state('composition.discuss', {
                url: '/discuss',
                component: 'lbCompositionDiscussionsView',
                resolve: {
                    composition: composition => composition
                }
            });
    })
    .name;
