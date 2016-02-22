(function () {
    'use strict';

    angular.module('app.composer').controller('ComposerController', ComposerController);

    ComposerController.$inject = ['composer']

    function ComposerController(composer) {

        var self = this;
        
        this.composer = composer;

        console.log(composer)
    }
})();