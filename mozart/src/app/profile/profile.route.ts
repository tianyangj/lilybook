import { ProfileController } from './profile.controller';
import { ProfileCompositionController } from './profile-composition.controller';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('profile', {
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

    $stateProvider.state('profile-composition', {
        url: '/profile/composition/:compositionId',
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
