import { ComposerService } from '../data/composer.service';

export class CompositionController {

    composer;

    /* @ngInject */
    constructor(
        private $stateParams: any,
        private composition: any,
        private composerService: ComposerService
    ) {
        console.log('CompositionController', this.composition);
        composerService.get(composition.composerId).then(composer => {
            this.composer = composer;
        });
    }

}
