/** @ngInject */
export function appConfig(
    $logProvider: angular.ILogProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider
) {
    $logProvider.debugEnabled(false);
    $urlRouterProvider.otherwise('/');
}
