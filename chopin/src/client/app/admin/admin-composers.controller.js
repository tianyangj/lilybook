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
                locals: { composer: angular.copy(composer) },
                targetEvent: $event
            }).then(function (updated) {
                angular.extend(composer, updated);
            });
        }
    }

    DialogController.$inject = ['$mdDialog', 'Composer'];

    function DialogController($mdDialog, Composer) {

        var self = this;

        this.close = function () {
            $mdDialog.cancel();
        }

        this.update = function () {
            self.composer.$save().then(function () {
                $mdDialog.hide(self.composer);
            });
        }
    }
})();
