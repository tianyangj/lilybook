import { ComposerDataService } from '../../common/data/composer.service';

class Controller {

    composers;

    private controller;

    /* @ngInject */
    constructor(
        private composerDataService: ComposerDataService
    ) { }

    $onInit() {
        this.controller.activeTab = 0;
        this.composerDataService.getFeaturedComposers().then(composers => this.composers = composers);
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
