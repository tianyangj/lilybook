import { ComposerDataService } from '../../common/data/composer.service';

class Controller {

    composers;

    private controller;

    /* @ngInject */
    constructor(
        private composerDataService: ComposerDataService,
        private $timeout,
        private $window
    ) { }

    $onInit() {
        this.controller.activeTab = 0;
        this.composerDataService.getFeaturedComposers().then(composers => {
            this.composers = composers;
            this.$timeout(() => {
                new this.$window.Swiper('.swiper-container', {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    loop: false,
                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: true,
                    scrollbarDraggable: true,
                    scrollbarSnapOnRelease: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                });
            });
        });
    }
}

export const HomeMainComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/home/home-main.html',
    controller: Controller,
    bindings: {
        user: '<'
    },
    require: {
        controller: '^lbHomeView'
    }
};
