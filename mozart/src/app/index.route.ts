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

  $stateProvider.state('app.home', {
    url: '/home',
    templateUrl: 'app/home/home.html',
    controller: 'HomeController',
    controllerAs: '$ctrl',
    resolve: {
      user: resolver.requireSignIn
    }
  });

  $stateProvider.state('home.likes', {
    url: '/likes',
    template: 'home.likes'
  });

  $stateProvider.state('home.bookmarks', {
    url: '/bookmarks',
    templateUrl: 'app/home/home-bookmarks.html',
    controller: 'HomeBookmarksController',
    controllerAs: '$ctrl',
    resolve: {
      user: resolver.requireSignIn
    }
  });

  $stateProvider.state('home.repertoire', {
    url: '/repertoire',
    template: 'home.repertoire'
  });

  $urlRouterProvider.otherwise('/');
}
