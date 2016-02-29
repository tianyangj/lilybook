(function () {
    'use strict';

    angular.module('app.admin').controller('AdminComposersController', AdminComposersController);

    AdminComposersController.$inject = ['$state', '$mdDialog', 'Composer'];

    function AdminComposersController($state, $mdDialog, Composer) {

        var self = this;

        onInit();

        this.gotoComposer = gotoComposer;

        this.openEditor = openEditor;

        this.createComposer = createComposer;

        function onInit() {
            Composer.find().$promise.then(function (composers) {
                self.composers = composers;
            });
        }

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
            }).then(function () {
                onInit();
            });
        }

        function createComposer() {
            $mdDialog.show({
                templateUrl: 'app/admin/admin-composers-editor-dialog.html',
                controller: DialogController,
                controllerAs: '$ctrl',
                bindToController: true,
                locals: { composer: null }
            }).then(function () {
                onInit();
            });
        }
    }

    DialogController.$inject = ['$mdDialog', 'Composer'];

    function DialogController($mdDialog, Composer) {

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
