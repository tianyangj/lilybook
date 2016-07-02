import { ComposerDataService } from '../common/data/composer.service';
import { DefinitionService } from '../data/definition.service';

export class CompositionController {

    composer;
    abrsm;
    form;
    henle;
    key;
    rcm;

    /* @ngInject */
    constructor(
        private composition: any,
        private composerService: ComposerDataService,
        private definitionService: DefinitionService
    ) {
        this.composition = composition;
        composerService.get(composition.composerId).then(composer => {
            this.composer = composer;
        });
        definitionService.getAbrsm(composition.abrsm).then(abrsm => {
            this.abrsm = abrsm;
        });
        definitionService.getForm(composition.form).then(form => {
            this.form = form;
        });
        definitionService.getHenle(composition.henle).then(henle => {
            this.henle = henle;
        });
        definitionService.getKey(composition.key).then(key => {
            this.key = key;
        });
        definitionService.getRcm(composition.rcm).then(rcm => {
            this.rcm = rcm;
        });
    }

}
