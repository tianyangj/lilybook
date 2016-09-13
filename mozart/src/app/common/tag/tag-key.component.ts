import { DefinitionDataService } from '../data/definition.service';

class Controller {

    tag;

    /** @ngInject */
    constructor(
        private definitionDataService: DefinitionDataService
    ) { }

    $onChanges(bindings) {
        if (bindings.id && bindings.id.currentValue) {
            this.definitionDataService.getKey(bindings.id.currentValue).then(key => this.tag = key);
        }
    }
}

export const TagKeyComponent: angular.IComponentOptions = {
    template: `
        <md-button 
            class="md-raised" 
            ui-sref="browse({key:$ctrl.tag.$id})" 
            style="background-color:#FF8A65;margin:0;color:#FFF;border-radius:16px;padding:0 16px;min-width:inherit;">
            {{$ctrl.tag.name}}
        </md-button>
    `,
    controller: Controller,
    transclude: true,
    bindings: {
        id: '<'
    }
};
