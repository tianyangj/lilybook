(function () {
    'use strict';

    angular.module('app.composer').component('lbComposerCompositions', {
        templateUrl: 'app/composer/components/composer-compositions.html',
        bindings: {
            composer: '<'
        },
        controller: ComposerCompositionsController
    });

    ComposerCompositionsController.$inject = ['Composer'];

    function ComposerCompositionsController(Composer) {

        Composer.compositions({
            id: this.composer.id,
            filter: {
                order: 'id DESC',
                limit: 5
            }
        }).$promise.then(function (compositions) {
            this.additions = compositions;
        }.bind(this));

        Composer.compositions({
            id: this.composer.id,
            filter: {
                order: 'id ASC',
                limit: 10
            }
        }).$promise.then(function (compositions) {
            this.populars = compositions;
        }.bind(this));
    }

})();
