(function() {
    'use strict';

    angular.module('app.core').filter('trusted', ['$sce', function($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);

})();
