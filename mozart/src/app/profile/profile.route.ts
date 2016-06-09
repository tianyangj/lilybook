import { ProfileController } from './profile.controller';
import { ProfileSummaryController } from './profile-summary.controller';
import { ProfileCompositionController } from './profile-composition.controller';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('profile', {
        abstract: true,
        url: '/profile/:uid',
        templateUrl: 'app/profile/profile.html',
        controller: ProfileController,
        controllerAs: '$ctrl',
        resolve: {
            vm: ['$stateParams', 'profileService', ($stateParams, profileService) => {
                return profileService.get($stateParams.uid);
            }]
        }
    });

    $stateProvider.state('profile.summary', {
        url: '',
        templateUrl: 'app/profile/profile-summary.html',
        controller: ProfileSummaryController,
        controllerAs: '$ctrl'
    });

    $stateProvider.state('profile.composition', {
        url: '/:compositionId',
        templateUrl: 'app/profile/profile-composition.html',
        controller: ProfileCompositionController,
        controllerAs: '$ctrl',
        resolve: {
            composition: ['$stateParams', 'compositionService', ($stateParams, compositionService) => {
                return compositionService.get($stateParams.compositionId).$loaded();
            }]
        }
    });
}
