import { ComposerComponentView } from './composer.component';
import { ComposersComponentView } from './composers.component';

export const ComposerModule = angular
    .module('lilybook.composer', [])
    .component('lbComposerView', ComposerComponentView)
    .component('lbComposersView', ComposersComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('composer', {
                url: '/composer/:vanity',
                component: 'lbComposerView'
            });
        $stateProvider
            .state('composers', {
                url: '/composers',
                component: 'lbComposersView'
            });
    })
    .name;
