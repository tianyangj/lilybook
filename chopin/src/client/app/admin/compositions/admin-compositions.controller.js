(function () {
    'use strict';

    angular.module('app.admin').controller('AdminCompositionsController', AdminCompositionsController);

    AdminCompositionsController.$inject = ['$mdDialog', 'Composer'];

    function AdminCompositionsController($mdDialog, Composer) {

        console.log('AdminCompositionsController...')
    }
})();
