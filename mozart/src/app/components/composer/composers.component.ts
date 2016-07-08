import { ComposerDataService } from '../../common/data/composer.service';

class Controller {

    composers;

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private composerDataService: ComposerDataService
    ) { }

    $onInit() {
        this.composerDataService.getAll().$loaded().then(composers => {
            let result = composers.filter(composer => composer.compositions);
            result.forEach(composer => {
                composer.compositionCount = Object.keys(composer.compositions).length;
            });
            this.composers = result;
        });
    }

    goto(composerId) {
        this.$state.go('composer', { vanity: composerId });
    }
}

export const ComposersComponentView = {
    templateUrl: 'app/components/composer/composers.html',
    controller: Controller
};
