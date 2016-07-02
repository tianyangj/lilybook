import { ComposersComponentView } from './composers.component';

export const ComposerModule = angular
    .module('lilybook.composer', [])
    .component('lbComposersView', ComposersComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('composers', {
                url: '/composers',
                component: 'lbComposersView'
            });
    })
    .name;
