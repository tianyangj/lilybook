/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  /*$stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    });*/

  $stateProvider.state('splash', {
    url: '/',
    templateUrl: 'app/splash/splash.html'
  });

  $urlRouterProvider.otherwise('/');
}
