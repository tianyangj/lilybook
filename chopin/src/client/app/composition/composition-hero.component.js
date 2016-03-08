(function() {
    'use strict';

    angular.module('app.composition').component('lbCompositionHero', {
        templateUrl: 'app/composition/composition-hero.html',
        bindings: {
            hero: '<?'
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
    }
})();
