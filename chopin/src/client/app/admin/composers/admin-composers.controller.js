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
            $state.go('composer', { vanity: composer.id });
        }

        function openEditor(composer, $event) {
            $event.stopPropagation();
            $mdDialog.show({
                templateUrl: 'app/admin/composers/admin-composers-dialog.html',
                controller: 'AdminComposersDialogController',
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
                templateUrl: 'app/admin/composers/admin-composers-dialog.html',
                controller: 'AdminComposersDialogController',
                controllerAs: '$ctrl',
                bindToController: true,
                locals: { composer: null }
            }).then(function () {
                onInit();
            });
        }
    }
})();
