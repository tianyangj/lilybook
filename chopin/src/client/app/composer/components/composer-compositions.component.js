(function() {
    'use strict';

    angular.module('app.composer').component('lbComposerCompositions', {
        templateUrl: 'app/composer/components/composer-compositions.html',
        bindings: {
            composer: '<'
        },
        controller: ComposerCompositionsController
    });

    ComposerCompositionsController.$inject = ['$rootScope', 'Composer'];

    function ComposerCompositionsController($rootScope, Composer) {

        Composer.compositions({
            id: this.composer.id,
            filter: {
                order: 'id DESC',
                limit: 5
            }
        }).$promise.then(function(compositions) {
            this.additions = compositions;
            if (this.additions.length) {
                this.composition = this.additions[0];
            }
        }.bind(this));

        Composer.compositions({
            id: this.composer.id,
            filter: {
                order: 'id ASC',
                limit: 10
            }
        }).$promise.then(function(compositions) {
            this.populars = compositions;
        }.bind(this));

        this.play = function(composition) {
            $rootScope.$emit('LB_EVENT_PLAYER', composition);
        };
    }

})();
