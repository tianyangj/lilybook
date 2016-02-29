(function () {
    'use strict';

    angular.module('app.admin').controller('AdminComposersDialogController', AdminComposersDialogController);

    AdminComposersDialogController.$inject = ['$mdDialog', 'Composer'];

    function AdminComposersDialogController($mdDialog, Composer) {

        var self = this;

        this.isCreate = this.composer === null;

        this.close = function () {
            $mdDialog.cancel();
        }

        this.upsert = function () {
            if (self.isCreate) {
                Composer.create(self.composer).$promise.then(function (composer) {
                    $mdDialog.hide(composer);
                })
            } else {
                self.composer.$save().then(function () {
                    $mdDialog.hide(self.composer);
                });
            }
        }

        this.delete = function () {
            Composer.deleteById({
                id: self.composer.id
            }).$promise.then(function () {
                $mdDialog.hide(self.composer);
            })
        }
    }
})();
