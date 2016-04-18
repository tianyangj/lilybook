(function () {
    'use strict';

    angular.module('app.admin').controller('AdminCompositionsEditController', AdminCompositionsEditController);

    AdminCompositionsEditController.$inject = ['$stateParams', 'Composition', 'definitionService'];

    function AdminCompositionsEditController($stateParams, Composition, definitionService) {

        var self = this;

        this.isCreate = $stateParams.vanity === 'new';

        if (this.isCreate) {
            this.action = 'Create';
        } else {
            this.action = 'Update';
            Composition.findById({
                id: $stateParams.vanity
            }).$promise.then(function (composition) {
                self.composition = composition;
            });
        }

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

        this.upsert = function () {
            if (self.composition && self.composition.sheet) {
                console.log(self.composition)
                if (self.composition.sheet.image && self.composition.sheet.pages > 1) {
                    self.composition.sheet.images = [];
                    for (var i = 1; i <= self.composition.sheet.pages; i++) {
                        self.composition.sheet.images.push(self.composition.sheet.image + '-' + i + '.png');
                    }
                }
            }
            if (self.isCreate) {
                Composition.create(self.composition).$promise.then(function (composition) {
                    self.composition = composition;
                });
            } else {
                self.composition.$save().then(function (composition) {
                    self.composition = composition;
                });
            }
        };
    }
})();
