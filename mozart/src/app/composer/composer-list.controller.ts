import { ComposerService } from '../data/composer.service';

export class ComposerListController {

    composers;

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private composerService: ComposerService
    ) {
        composerService.getAll().then(composers => {
            this.composers = composers;
        });
    }

    goto(composerId) {
        this.$state.go('composer', { vanity: composerId });
    }
}
