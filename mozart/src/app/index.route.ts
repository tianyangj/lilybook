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
    template: 'home.bookmarks'
  });

  $stateProvider.state('home.repertoire', {
    url: '/repertoire',
    template: 'home.repertoire'
  });

  $urlRouterProvider.otherwise('/');
}
