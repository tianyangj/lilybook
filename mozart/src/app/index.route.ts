import { resolver } from './resolvers';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

  $stateProvider.state('app', {
    abstract: true,
    templateUrl: 'app/layout/app.html',
    resolve: {
      user: resolver.waitForSignIn
    }
  });

  $stateProvider.state('app.splash', {
    url: '/',
    templateUrl: 'app/splash/splash.html'
  });

  $stateProvider.state('app.login', {
    url: '/login',
    templateUrl: 'app/login/login.html',
    controller: 'LoginController',
    controllerAs: '$ctrl'
  });

  $urlRouterProvider.otherwise('/');
}
