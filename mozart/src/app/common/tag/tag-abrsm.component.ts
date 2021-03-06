import { DefinitionDataService } from '../data/definition.service';

class Controller {

    abrsm;

    /** @ngInject */
    constructor(
        private definitionDataService: DefinitionDataService
    ) { }

    $onChanges(bindings) {
        if (bindings.id && bindings.id.currentValue) {
            this.definitionDataService.getAbrsm(bindings.id.currentValue).then(abrsm => this.abrsm = abrsm);
        }
    }
}

export const TagAbrsmComponent: angular.IComponentOptions = {
    template: `
        <md-button 
            class="md-raised" 
            ui-sref="browse({abrsm:$ctrl.id})" 
            ng-if="$ctrl.id"
            style="background-color:#F06292;margin:0;color:#FFF;border-radius:16px;padding:0 16px;min-width:inherit;">
            {{$ctrl.abrsm.name}}
        </md-button>
    `,
    controller: Controller,
    bindings: {
        id: '<'
    }
};
