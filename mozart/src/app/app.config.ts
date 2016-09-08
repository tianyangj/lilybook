/** @ngInject */
export function appConfig(
    $logProvider: angular.ILogProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider,
    $mdThemingProvider: angular.material.IThemingProvider
) {
    $logProvider.debugEnabled(false);
    $urlRouterProvider.otherwise('/');
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink')
        .warnPalette('red');
}
