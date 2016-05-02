/** @ngInject */
export function runBlock(
  $log: angular.ILogService,
  Account: any
) {
  Account.getCurrent().$promise.then(() => {
    $log.debug('AUTHENTICATED');
  }).catch(() => {
    $log.debug('NOT AUTHENTICATED');
  });
}
