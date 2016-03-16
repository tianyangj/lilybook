(function() {
    'use strict';

    angular.module('app.home').controller('HomeController', HomeController);

    HomeController.$inject = ['logger'];

    function HomeController(logger) {
        var vm = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            logger.info('Activated HomeController View');
        }
    }
})();
