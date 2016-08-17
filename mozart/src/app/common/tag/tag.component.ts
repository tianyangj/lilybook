import { ComposerDataService } from '../data/composer.service';
import { DefinitionDataService } from '../data/definition.service';

class Controller {

    tag;

    private type;
    private id;

    /** @ngInject */
    constructor(
        private composerDataService: ComposerDataService,
        private definitionDataService: DefinitionDataService
    ) { }

    $onInit() {
        switch (this.type) {
            case 'composer':
                this.tag = this.composerDataService.get(this.id);
                break;
            case 'rcm':
                this.definitionDataService.getRcm(this.id).then(rcm => this.tag = rcm);
                break;
            case 'abrsm':
                this.definitionDataService.getAbrsm(this.id).then(abrsm => this.tag = abrsm);
                break;
            case 'henle':
                this.definitionDataService.getHenle(this.id).then(henle => this.tag = henle);
                break;
            case 'key':
                this.definitionDataService.getKey(this.id).then(key => this.tag = key);
                break;
            case 'form':
                this.definitionDataService.getForm(this.id).then(form => this.tag = form);
                break;
        }
    }
}

export const TagComponent: angular.IComponentOptions = {
    templateUrl: 'app/common/tag/tag.html',
    controller: Controller,
    transclude: true,
    bindings: {
        type: '@',
        id: '@',
        fullname: '<'
    }
};
