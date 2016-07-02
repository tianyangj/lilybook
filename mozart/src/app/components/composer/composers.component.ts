import { ComposerDataService } from '../../common/data/composer.service';

class ComposersComponentController {

    composers;

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private composerDataService: ComposerDataService
    ) {
        this.composers = composerDataService.getAll();
    }

    goto(composerId) {
        this.$state.go('app.composer', { vanity: composerId });
    }
}

export const ComposersComponentView = {
    templateUrl: 'app/components/composer/composers.html',
    controller: ComposersComponentController
};
