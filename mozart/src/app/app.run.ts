/** @ngInject */
export function runBlock(
    $log: angular.ILogService,
    $state: angular.ui.IStateService,
    $rootScope: angular.IRootScopeService
) {

    // initialize Firebase
    var config = {
        apiKey: 'AIzaSyADuDoy8NEkWG-P21XmTEKoWiCl1nV3eWA',
        authDomain: 'project-6379245924955471702.firebaseapp.com',
        databaseURL: 'https://project-6379245924955471702.firebaseio.com',
        storageBucket: 'project-6379245924955471702.appspot.com'
    };
    firebase.initializeApp(config);

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
