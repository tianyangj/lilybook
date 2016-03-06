(function () {
    'use strict';

    angular.module('app.composer').controller('ComposerController', ComposerController);

    ComposerController.$inject = ['composer']

    function ComposerController(composer) {

        this.composer = composer;
    }
})();