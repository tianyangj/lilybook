(function () {
    'use strict';

    angular.module('app.core').run(appRun);

    appRun.$inject = ['$rootScope', '$state', 'Account'];

    function appRun($rootScope, $state, Account) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.authentication && !Account.isAuthenticated()) {
                event.preventDefault();
                return $state.go('login', { next: toState });
            }
            if (toState.admin) {
                Account.getCurrent().$promise.then(function (user) {
                    if (!user || !user.admin) {
                        event.preventDefault();
                        return $state.go('splash');
                    }
                });
            }
        });
    }

})();
