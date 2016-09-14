import { ComposerComponentView } from './composer.component';
import { ComposersComponentView } from './composers.component';

import { ComposerDataService } from '../../common/data/composer.service';

export const ComposerModule = angular
    .module('lilybook.composer', [])
    .component('lbComposerView', ComposerComponentView)
    .component('lbComposersView', ComposersComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('composer', {
                url: '/composer/:vanity',
                component: 'lbComposerView',
                resolve: {
                    composer: ($stateParams, composerDataService: ComposerDataService) => composerDataService.get($stateParams.vanity).$loaded()
                }
            });
        $stateProvider
            .state('composers', {
                url: '/composers',
                component: 'lbComposersView',
                resolve: {
                    composers: (composerDataService: ComposerDataService) => composerDataService.getActiveComposers()
                }
            });
    })
    .name;
