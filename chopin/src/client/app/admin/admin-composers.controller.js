(function () {
    'use strict';

    angular.module('app.admin').controller('AdminComposersController', AdminComposersController);

    AdminComposersController.$inject = ['Composer'];

    function AdminComposersController(Composer) {
        Composer.find().$promise.then(function (composers) {
            this.composers = composers;
        }.bind(this));
    }
})();
