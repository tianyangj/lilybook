import { ComposerDataService } from '../../common/data/composer.service';
import { DefinitionDataService } from '../../common/data/definition.service';

class Controller {

    composition;
    composer;
    user;
    abrsm;
    form;
    henle;
    key;
    rcm;

    /* @ngInject */
    constructor(
        private composerDataService: ComposerDataService,
        private definitionDataService: DefinitionDataService
    ) { }

    $onInit() {
        this.composer = this.composerDataService.get(this.composition.composerId);
        this.definitionDataService.getAbrsm(this.composition.abrsm).then(abrsm => {
            this.abrsm = abrsm;
        });
        this.definitionDataService.getForm(this.composition.form).then(form => {
            this.form = form;
        });
        this.definitionDataService.getHenle(this.composition.henle).then(henle => {
            this.henle = henle;
        });
        this.definitionDataService.getKey(this.composition.key).then(key => {
            this.key = key;
        });
        this.definitionDataService.getRcm(this.composition.rcm).then(rcm => {
            this.rcm = rcm;
        });
    }
}

export const CompositionDetailsComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/composition/composition-details.html',
    controller: Controller,
    bindings: {
        composition: '<',
        user: '<'
    }
};
