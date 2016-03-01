(function () {
    'use strict';

    angular.module('app.admin').controller('AdminCompositionsController', AdminCompositionsController);

    AdminCompositionsController.$inject = ['$mdDialog', 'Composition'];

    function AdminCompositionsController($mdDialog, Composition) {

        var self = this;

        onInit();

        function onInit() {
            Composition.find().$promise.then(function (compositions) {
                self.compositions = compositions;
            });
        }
    }
})();
