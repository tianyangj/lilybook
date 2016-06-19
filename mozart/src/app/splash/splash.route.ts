import { LoginController } from './login.controller';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('app.splash', {
        url: '/',
        templateUrl: 'app/splash/splash.html'
    });

    $stateProvider.state('app.login', {
        url: '/login',
        templateUrl: 'app/splash/login.html',
        controller: LoginController,
        controllerAs: '$ctrl'
    });
}
