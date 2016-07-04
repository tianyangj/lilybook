import { BookCompositionComponentView } from './book-composition.component';
import { BookSummaryComponentView } from './book-summary.component';

export const BookModule = angular
    .module('lilybook.book', [])
    .component('lbBookCompositionView', BookCompositionComponentView)
    .component('lbBookSummaryView', BookSummaryComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('book', {
                abstract: true,
                url: '/book/:uid',
                template: '<ui-view />',
                resolve: {
                    vm: ($stateParams, profileDataService) => profileDataService.get($stateParams.uid)
                }
            });
        $stateProvider
            .state('book.summary', {
                url: '',
                component: 'lbBookSummaryView'
            });
        $stateProvider
            .state('book.composition', {
                url: '/:compositionId',
                component: 'lbBookCompositionView',
                resolve: {
                    composition: ($stateParams, compositionDataService) => compositionDataService.get($stateParams.compositionId).$loaded()
                }
            });
    })
    .name;
