import { LoginController } from './login.controller';
import { SignupController } from './signup.controller';
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

    $stateProvider.state('app.signup', {
        url: '/signup',
        templateUrl: 'app/splash/signup.html',
        controller: SignupController,
        controllerAs: '$ctrl'
    });
}
