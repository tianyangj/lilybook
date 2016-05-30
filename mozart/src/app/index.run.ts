/** @ngInject */
export function runBlock(
  $log: angular.ILogService,
  firebase: any
) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      $log.debug('AUTHENTICATED', user);
    } else {
      $log.debug('NOT AUTHENTICATED', user);
    }
  });
}
