(function () {
    'use strict';

    angular.module('app.admin').controller('AdminFormsDialogController', AdminFormsDialogController);

    AdminFormsDialogController.$inject = ['$mdDialog', 'Form'];

    function AdminFormsDialogController($mdDialog, Form) {

        var self = this;

        this.isCreate = this.form === null;

        this.close = function () {
            $mdDialog.cancel();
        }

        this.upsert = function () {
            if (self.isCreate) {
                Form.create(self.form).$promise.then(function (form) {
                    $mdDialog.hide(form);
                })
            } else {
                self.form.$save().then(function () {
                    $mdDialog.hide(self.form);
                });
            }
        }

        this.delete = function () {
            Form.deleteById({
                id: self.form.id
            }).$promise.then(function () {
                $mdDialog.hide(self.form);
            })
        }
    }
})();
