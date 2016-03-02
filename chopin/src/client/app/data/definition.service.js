(function () {
    'use strict';

    angular.module('app.data').factory('definitionService', definitionService);

    definitionService.$inject = ['$q', '$cacheFactory', 'Composer', 'Key', 'Form', 'ABRSM', 'Henle', 'RCM'];

    function definitionService($q, $cacheFactory, Composer, Key, Form, ABRSM, Henle, RCM) {

        var cache = $cacheFactory('definition');

        var service = {
            getComposers: getComposers,
            getKeys: getKeys,
            getForms: getForms,
            getABRSMs: getABRSMs,
            getHenles: getHenles,
            getRCMs: getRCMs
        };

        return service;

        function getComposers() {
            var composers = cache.get('composers');
            if (composers) {
                return $q.when(composers);
            }
            return Composer.find().$promise.then(function (composers) {
                cache.put('composers', composers);
                return composers;
            });
        }

        function getKeys() {
            var keys = cache.get('keys');
            if (keys) {
                return $q.when(keys);
            }
            return Key.find().$promise.then(function (keys) {
                cache.put('keys', keys);
                return keys;
            });
        }

        function getForms() {
            var forms = cache.get('forms');
            if (forms) {
                return $q.when(forms);
            }
            return Form.find().$promise.then(function (forms) {
                cache.put('forms', forms);
                return forms;
            });
        }

        function getABRSMs() {
            var abrsms = cache.get('abrsms');
            if (abrsms) {
                return $q.when(abrsms);
            }
            return ABRSM.find().$promise.then(function (abrsms) {
                cache.put('abrsms', abrsms);
                return abrsms;
            });
        }

        function getHenles() {
            var henles = cache.get('henles');
            if (henles) {
                return $q.when(henles);
            }
            return Henle.find().$promise.then(function (henles) {
                cache.put('henles', henles);
                return henles;
            });
        }

        function getRCMs() {
            var rcms = cache.get('rcms');
            if (rcms) {
                return $q.when(rcms);
            }
            return RCM.find().$promise.then(function (rcms) {
                cache.put('rcms', rcms);
                return rcms;
            });
        }
    }
})();
