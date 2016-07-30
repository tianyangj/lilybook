import { AuthenticationService } from '../../common/services/authentication.service';
import { ComposerDataService } from '../../common/data/composer.service';
import { DefinitionDataService } from '../../common/data/definition.service';

class CompositionComponentController {

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
        private authenticationService: AuthenticationService,
        private composerDataService: ComposerDataService,
        private definitionDataService: DefinitionDataService
    ) { }

    $onInit() {
        this.authenticationService.authObj.$onAuthStateChanged(user => this.user = user);
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

export const CompositionComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/composition/composition.html',
    controller: CompositionComponentController,
    bindings: {
        composition: '<'
    }
};
