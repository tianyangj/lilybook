import { ComposerController } from './composer.controller';
import { ComposerListController } from './composer-list.controller';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('app.composer', {
        url: '/composer/:vanity',
        templateUrl: 'app/composer/composer.html',
        controller: ComposerController,
        controllerAs: '$ctrl'
    });

    $stateProvider.state('app.composer-list', {
        url: '/composers',
        templateUrl: 'app/composer/composer-list.html',
        controller: ComposerListController,
        controllerAs: '$ctrl'
    });
}
