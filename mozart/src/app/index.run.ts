/** @ngInject */
export function runBlock(
  $log: angular.ILogService,
  $state: angular.ui.IStateService,
  $rootScope: angular.IRootScopeService,
  firebase: any
) {

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      $log.debug('AUTHENTICATED', user);
    } else {
      $log.debug('NOT AUTHENTICATED', user);
    }
  });

  $rootScope.$on('$stateChangeError', function () {
    console.log('stateChangeError', arguments);
  });
}
