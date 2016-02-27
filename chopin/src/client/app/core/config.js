(function () {
    'use strict';

    var core = angular.module('app.core');

    var config = {
        appErrorPrefix: '[lilybook Error] ',
        appTitle: 'lilybook'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', '$httpProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure($logProvider, $httpProvider, routerHelperProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });

        $httpProvider.interceptors.push(interceptor);

        interceptor.$inject = ['$q', '$location', 'LoopBackAuth'];

        function interceptor($q, $location, LoopBackAuth) {
            return {
                responseError: function (rejection) {
                    if (rejection.status == 401) {
                        LoopBackAuth.clearUser();
                        LoopBackAuth.clearStorage();
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        }
    }

})();
