import { resolver } from './resolvers';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

  $stateProvider.state('splash', {
    url: '/',
    templateUrl: 'app/splash/splash.html'
  });

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'app/login/login.html',
    controller: 'LoginController',
    controllerAs: '$ctrl'
  });

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'app/home/home.html',
    controller: 'HomeController',
    controllerAs: '$ctrl'
  });

  $stateProvider.state('home.profile', {
    url: '/profile',
    template: 'home.profile'
  });

  $stateProvider.state('home.likes', {
    url: '/likes',
    template: 'home.likes'
  });

  $stateProvider.state('home.bookmarks', {
    url: '/bookmarks',
    templateUrl: 'app/home/home-bookmarks.html',
    controller: 'HomeBookmarksController',
    controllerAs: '$ctrl'
  });

  $stateProvider.state('home.repertoire', {
    url: '/repertoire',
    template: 'home.repertoire'
  });

  $stateProvider.state('composer', {
    url: '/composer/:vanity',
    templateUrl: 'app/composer/composer.html',
    controller: 'ComposerController',
    controllerAs: '$ctrl'
  });

  $stateProvider.state('composer-list', {
    url: '/composers',
    templateUrl: 'app/composer/composer-list.html',
    controller: 'ComposerListController',
    controllerAs: '$ctrl'
  });

  $stateProvider.state('composition', {
    url: '/composition/:id',
    templateUrl: 'app/composition/composition.html',
    controller: 'CompositionController',
    controllerAs: '$ctrl',
    resolve: {
      composition: resolver.getComposition
    }
  });
  
  $stateProvider.state('composition.sheet', {
    url: '/sheetmusic',
    template: '<div>sheet music</div>'
  });
  
  $stateProvider.state('composition.videos', {
    url: '/videos',
    template: '<div>videos</div>'
  });
  
  $stateProvider.state('composition.qa', {
    url: '/qa',
    template: '<div>questions and answers</div>'
  });

  $urlRouterProvider.otherwise('/');
}
