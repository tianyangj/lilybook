(function () {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log'];

    /* @ngInject */
    function logger($log) {
        var service = {
            showToasts: true,

            error: error,
            info: info,
            success: success,
            warning: warning,

            // straight to console
            log: $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            $log.error('Error: ' + message, data, title);
        }

        function info(message, data, title) {
            $log.info('Info: ' + message, data, title);
        }

        function success(message, data, title) {
            $log.info('Success: ' + message, data, title);
        }

        function warning(message, data, title) {
            $log.warn('Warning: ' + message, data, title);
        }
    }
} ());
