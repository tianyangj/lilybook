(function () {
    'use strict';

    angular.module('app.layout').component('lbSidenav', {
        templateUrl: 'app/layout/lb-sidenav.html',
        controller: SidenavComponentController
    });

    SidenavComponentController.$inject = ['$mdSidenav'];

    function SidenavComponentController($mdSidenav) {

        this.close = function () {
            $mdSidenav('left').close();
        }
    }

})();
