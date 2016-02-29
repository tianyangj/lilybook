(function () {
    'use strict';

    angular.module('app.admin').controller('AdminFormsController', AdminFormsController);

    AdminFormsController.$inject = ['$mdDialog', 'Composer'];

    function AdminFormsController($mdDialog, Composer) {

        console.log('AdminFormsController...')
    }
})();
