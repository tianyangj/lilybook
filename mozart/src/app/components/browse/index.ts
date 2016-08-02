import { BrowseComponentView } from './browse.component';

export const BrowseModule = angular
    .module('lilybook.browse', [])
    .component('lbBrowseView', BrowseComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('browse', {
                url: '/browse?composer&form&key&abrsm&rcm&henle',
                component: 'lbBrowseView'
            });
    })
    .name;
