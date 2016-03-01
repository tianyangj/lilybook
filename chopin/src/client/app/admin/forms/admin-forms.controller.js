(function () {
    'use strict';

    angular.module('app.admin').controller('AdminFormsController', AdminFormsController);

    AdminFormsController.$inject = ['$mdDialog', 'Form'];

    function AdminFormsController($mdDialog, Form) {

        var self = this;

        onInit();

        this.openEditor = openEditor;

        this.createForm = createForm;

        function onInit() {
            Form.find({
                filter: { order: 'order ASC' }
            }).$promise.then(function (forms) {
                self.forms = forms;
            });
        }

        function openEditor(form, $event) {
            $event.stopPropagation();
            $mdDialog.show({
                templateUrl: 'app/admin/forms/admin-forms-dialog.html',
                controller: 'AdminFormsDialogController',
                controllerAs: '$ctrl',
                bindToController: true,
                locals: { form: angular.copy(form) },
                targetEvent: $event
            }).then(function () {
                onInit();
            });
        }

        function createForm() {
            $mdDialog.show({
                templateUrl: 'app/admin/forms/admin-forms-dialog.html',
                controller: 'AdminFormsDialogController',
                controllerAs: '$ctrl',
                bindToController: true,
                locals: { form: null }
            }).then(function () {
                onInit();
            });
        }
    }
})();
