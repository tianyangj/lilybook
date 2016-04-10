(function () {
    'use strict';

    var core = angular.module('app.core');

    var config = {
        appErrorPrefix: '[lilybook Error] ',
        appTitle: 'lilybook'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', '$httpProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure($logProvider, $httpProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);

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
