import { AdminCompositionsController } from './admin-compositions.controller';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html'
    });

    $stateProvider.state('admin.compositions', {
        url: '/compositions',
        templateUrl: 'app/admin/admin-compositions.html',
        controller: AdminCompositionsController,
        controllerAs: '$ctrl'
    });
}
