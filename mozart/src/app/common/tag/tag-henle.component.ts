import { DefinitionDataService } from '../data/definition.service';

class Controller {

    henle;

    /** @ngInject */
    constructor(
        private definitionDataService: DefinitionDataService
    ) { }

    $onChanges(bindings) {
        if (bindings.id && bindings.id.currentValue) {
            this.definitionDataService.getHenle(bindings.id.currentValue).then(henle => this.henle = henle);
        }
    }
}

export const TagHenleComponent: angular.IComponentOptions = {
    template: `
        <md-button 
            class="md-raised" 
            ui-sref="browse({henle:$ctrl.id})" 
            ng-if="$ctrl.id"
            style="background-color:#F06292;margin:0;color:#FFF;border-radius:16px;padding:0 16px;min-width:inherit;">
            {{$ctrl.henle.name}}
        </md-button>
    `,
    controller: Controller,
    bindings: {
        id: '<'
    }
};
