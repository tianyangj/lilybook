(function () {
    'use strict';

    angular.module('app.admin').controller('AdminCompositionsEditController', AdminCompositionsEditController);

    AdminCompositionsEditController.$inject = ['$stateParams', 'Composition', 'definitionService'];

    function AdminCompositionsEditController($stateParams, Composition, definitionService) {

        var self = this;

        Composition.findById({
            id: $stateParams.vanity
        }).$promise.then(function (composition) {
            self.composition = composition;
        });

        definitionService.getComposers().then(function (composers) {
            self.composers = composers;
        });

        definitionService.getKeys().then(function (keys) {
            self.keys = keys;
        });

        definitionService.getForms().then(function (forms) {
            self.forms = forms;
        });

        definitionService.getABRSMs().then(function (abrsms) {
            self.abrsms = abrsms;
        });

        definitionService.getHenles().then(function (henles) {
            self.henles = henles;
        });

        definitionService.getRCMs().then(function (rcms) {
            self.rcms = rcms;
        });

        this.update = function () {
            self.composition.$save().then(function (composition) {
                self.composition = composition;
            });
        };
    }
})();
