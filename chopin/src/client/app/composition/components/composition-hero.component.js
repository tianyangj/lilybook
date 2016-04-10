(function() {
    'use strict';

    angular.module('app.composition').component('lbCompositionHero', {
        templateUrl: 'app/composition/components/composition-hero.html',
        bindings: {
            hero: '<?',
            onToggle: '&'
        },
        controller: CompositionHeroController
    });

    function CompositionHeroController() {

        this.config = {
            sources: [
                { src: this.hero }
            ],
            plugins: {
                controls: {
                    autoHide: true,
                    autoHideTime: 5000
                }
            }
        };

        this.icon = 'keyboard_arrow_up';

        this.toggle = function() {
            this.onToggle();
            this.icon = this.icon === 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
        }
    }
})();
