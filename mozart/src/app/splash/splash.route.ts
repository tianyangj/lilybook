import { ResolverService } from '../common/resolvers/resolver.service';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('splash', {
        url: '/',
        templateUrl: 'app/splash/splash.html',
        resolve: {
            /** @ngInject */
            redirect: (resolverService: ResolverService) => resolverService.redirectIfSignIn()
        }
    });
}
