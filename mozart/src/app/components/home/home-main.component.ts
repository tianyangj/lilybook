import { ComposerDataService } from '../../common/data/composer.service';

class Controller {

    composers;
    options;

    private controller;

    /* @ngInject */
    constructor(
        private composerDataService: ComposerDataService
    ) { }

    $onInit() {
        this.controller.activeTab = 0;
        this.composerDataService.getFeaturedComposers().then(composers => {
            this.composers = composers;
            this.options = {
                slidesPerView: 6,
                slidesPerGroup: 6,
                breakpoints: {
                    400: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    600: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    800: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    },
                    1000: {
                        slidesPerView: 5,
                        slidesPerGroup: 5
                    }
                }
            };
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
