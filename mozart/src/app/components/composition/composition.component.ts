import { ComposerDataService } from '../../common/data/composer.service';
import { DefinitionDataService } from '../../common/data/definition.service';

class CompositionComponentController {

    composition;
    composer;
    abrsm;
    form;
    henle;
    key;
    rcm;

    /* @ngInject */
    constructor(
        private composerDataService: ComposerDataService,
        private definitionDataService: DefinitionDataService
    ) {
        this.composer = composerDataService.get(this.composition.composerId);
        definitionDataService.getAbrsm(this.composition.abrsm).then(abrsm => {
            this.abrsm = abrsm;
        });
        definitionDataService.getForm(this.composition.form).then(form => {
            this.form = form;
        });
        definitionDataService.getHenle(this.composition.henle).then(henle => {
            this.henle = henle;
        });
        definitionDataService.getKey(this.composition.key).then(key => {
            this.key = key;
        });
        definitionDataService.getRcm(this.composition.rcm).then(rcm => {
            this.rcm = rcm;
        });
    }

}

export const CompositionComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/composition/composition.html',
    controller: CompositionComponentController,
    bindings: {
        composition: '<'
    }
};
