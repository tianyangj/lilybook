import { DefinitionDataService } from '../data/definition.service';

class Controller {

    key;

    /** @ngInject */
    constructor(
        private definitionDataService: DefinitionDataService
    ) { }

    $onChanges(bindings) {
        if (bindings.id && bindings.id.currentValue) {
            this.definitionDataService.getKey(bindings.id.currentValue).then(key => this.key = key);
        }
    }
}

export const TagKeyComponent: angular.IComponentOptions = {
    template: `
        <md-button 
            class="md-raised" 
            ui-sref="browse({key:$ctrl.id})" 
            ng-if="$ctrl.id"
            style="background-color:#FF8A65;color:#FFF;border-radius:16px;padding:0 16px;min-width:inherit;">
            {{$ctrl.key.name}}
        </md-button>
    `,
    controller: Controller,
    bindings: {
        id: '<'
    }
};
