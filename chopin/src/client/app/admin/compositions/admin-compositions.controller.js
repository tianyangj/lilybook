(function() {
    'use strict';

    angular.module('app.admin').controller('AdminCompositionsController', AdminCompositionsController);

    AdminCompositionsController.$inject = ['$state', 'Composition'];

    function AdminCompositionsController($state, Composition) {

        this.createComposition = function() {
            $state.go('admin.compositions-edit', { vanity: 'new' });
        };

        Composition.find({
            filter: {
                fields: {
                    id: true,
                    title: true
                }
            }
        }).$promise.then(function(compositions) {
            this.compositions = compositions;
        }.bind(this));
    }
})();
