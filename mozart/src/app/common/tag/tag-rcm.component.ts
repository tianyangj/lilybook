import { DefinitionDataService } from '../data/definition.service';

class Controller {

    rcm;

    /** @ngInject */
    constructor(
        private definitionDataService: DefinitionDataService
    ) { }

    $onChanges(bindings) {
        if (bindings.id && bindings.id.currentValue) {
            this.definitionDataService.getRcm(bindings.id.currentValue).then(rcm => this.rcm = rcm);
        }
    }
}

export const TagRcmComponent: angular.IComponentOptions = {
    template: `
        <md-button 
            class="md-raised" 
            ui-sref="browse({rcm:$ctrl.id})" 
            ng-if="$ctrl.id"
            style="background-color:#F06292;margin:0;color:#FFF;border-radius:16px;padding:0 16px;min-width:inherit;">
            {{$ctrl.rcm.name}}
        </md-button>
    `,
    controller: Controller,
    bindings: {
        id: '<'
    }
};
