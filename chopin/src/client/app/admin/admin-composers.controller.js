(function () {
    'use strict';

    angular.module('app.admin').controller('AdminComposersController', AdminComposersController);

    AdminComposersController.$inject = ['$state', '$mdDialog', 'Composer'];

    function AdminComposersController($state, $mdDialog, Composer) {

        var self = this;

        Composer.find().$promise.then(function (composers) {
            self.composers = composers;
        });

        this.gotoComposer = gotoComposer;

        this.openEditor = openEditor;

        function gotoComposer(composer) {
            console.log('goto')
            //$state.go('composer', { vanity: composer.id });
        }

        function openEditor(composer, $event) {
            $event.stopPropagation();
            $mdDialog.show({
                templateUrl: 'app/admin/admin-composers-editor-dialog.html',
                controller: DialogController,
                controllerAs: '$ctrl',
                bindToController: true,
                locals: { original: composer },
                targetEvent: $event
            }).then(function (updated) {
                console.log('updated composer', updated);
            });
        }
    }

    DialogController.$inject = ['$mdDialog'];

    function DialogController($mdDialog) {

        var self = this;

        this.updated = angular.copy(this.original);

        this.close = function () {
            $mdDialog.cancel();
        }

        this.update = function () {
            $mdDialog.hide(self.updated);
        }
    }
})();
