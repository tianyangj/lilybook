(function () {
    'use strict';

    angular.module('app.admin').controller('AdminCompositionsController', AdminCompositionsController);

    AdminCompositionsController.$inject = ['Composition'];

    function AdminCompositionsController(Composition) {

        var self = this;

        onInit();

        function onInit() {
            Composition.find({
                filter: {
                    fields: {
                        id: true,
                        title: true
                    }
                }
            }).$promise.then(function (compositions) {
                self.compositions = compositions;
            });
        }
    }
})();
