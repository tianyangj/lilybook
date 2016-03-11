(function() {
    'use strict';

    angular.module('app.composition').component('lbCompositionHero', {
        templateUrl: 'app/composition/composition-hero.html',
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
            theme: {
                url: '/bower_components/videogular-themes-default/videogular.css'
            },
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
