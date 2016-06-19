/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

  $stateProvider.state('app', {
    abstract: true,
    templateUrl: 'app/app.html'
  });

  $urlRouterProvider.otherwise('/');
}
