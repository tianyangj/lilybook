(function () {
    'use strict';

    angular.module('app.layout').component('lbHeader', {
        templateUrl: '/src/client/app/layout/lb-header.html',
        controller: HeaderController
    });

    HeaderController.$inject = ['$mdSidenav'];

    function HeaderController($mdSidenav) {

        this.toggleSidenav = function (sidenavId) {
            $mdSidenav(sidenavId).toggle();
        };
    }

})();
