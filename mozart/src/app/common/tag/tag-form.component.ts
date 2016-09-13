import { DefinitionDataService } from '../data/definition.service';

class Controller {

    form;

    /** @ngInject */
    constructor(
        private definitionDataService: DefinitionDataService
    ) { }

    $onChanges(bindings) {
        if (bindings.id && bindings.id.currentValue) {
            this.definitionDataService.getForm(bindings.id.currentValue).then(form => this.form = form);
        }
    }
}

export const TagFormComponent: angular.IComponentOptions = {
    template: `
        <md-button 
            class="md-raised" 
            ui-sref="browse({form:$ctrl.id})" 
            ng-if="$ctrl.id"
            style="background-color:#AED581;margin:0;color:#FFF;border-radius:16px;padding:0 16px;min-width:inherit;">
            {{$ctrl.form.name}}
        </md-button>
    `,
    controller: Controller,
    bindings: {
        id: '<'
    }
};
