import { CompositionDataService } from '../../common/data/composition.service';

import { CompositionComponentView } from './composition.component';
import { CompositionDetailsComponentView } from './composition-details.component';
import { CompositionSheetComponentView } from './composition-sheet.component';
import { CompositionCollectionComponent } from './composition-collection.component';
import { CompositionLikeComponent } from './composition-like.component';
import { CompositionFabBookmarkComponent } from './composition-fab-bookmark.component';

export const CompositionModule = angular
    .module('lilybook.composition', [
        'hm.readmore',
        'toastr'
    ])
    .component('lbCompositionView', CompositionComponentView)
    .component('lbCompositionDetailsView', CompositionDetailsComponentView)
    .component('lbCompositionSheetView', CompositionSheetComponentView)
    .component('lbCompositionCollection', CompositionCollectionComponent)
    .component('lbCompositionLike', CompositionLikeComponent)
    .component('lbCompositionFabBookmark', CompositionFabBookmarkComponent)
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
                template: '<div class="md-padding">Videos section coming soon...</div>'
            });
        $stateProvider
            .state('composition.discuss', {
                url: '/discuss',
                template: '<div class="md-padding">Discussions section coming soon...</div>'
            });
    })
    .name;
