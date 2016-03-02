(function () {
    'use strict';

    angular.module('app.admin').controller('AdminCompositionsEditController', AdminCompositionsEditController);

    AdminCompositionsEditController.$inject = ['$stateParams', 'Composition', 'Composer', 'Key', 'Form', 'ABRSM'];

    function AdminCompositionsEditController($stateParams, Composition, Composer, Key, Form, ABRSM) {

        var self = this;

        Composition.findById({
            id: $stateParams.vanity
        }).$promise.then(function (composition) {
            self.composition = composition;
        });

        Composer.find().$promise.then(function (composers) {
            self.composers = composers;
        });

        Key.find().$promise.then(function (keys) {
            self.keys = keys;
        });

        Form.find().$promise.then(function (forms) {
            self.forms = forms;
        });

        ABRSM.find().$promise.then(function (abrsms) {
            self.abrsms = abrsms;
        });

        this.update = function () {
            self.composition.$save().then(function (composition) {
                self.composition = composition;
            });
        };
    }
})();
