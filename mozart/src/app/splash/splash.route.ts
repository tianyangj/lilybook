import { LoginController } from './login.controller';
import { ResolverService } from '../data/resolver.service';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('app.splash', {
        url: '/',
        templateUrl: 'app/splash/splash.html',
        resolve: {
            /** @ngInject */
            redirect: (resolverService: ResolverService) => resolverService.redirectIfSignIn()
        }
    });

    $stateProvider.state('app.login', {
        url: '/login',
        templateUrl: 'app/splash/login.html',
        controller: LoginController,
        controllerAs: '$ctrl'
    });
}
