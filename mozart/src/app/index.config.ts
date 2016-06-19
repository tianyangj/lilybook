/** @ngInject */
export function appConfig($logProvider: angular.ILogProvider) {
  // enable log
  $logProvider.debugEnabled(true);
}
