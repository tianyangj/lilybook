class Controller {

    isOpen;

    $onInit() {
        this.isOpen = false;
    }
}

export const CompositionFabComponent: angular.IComponentOptions = {
    templateUrl: 'app/components/composition/composition-fab.html',
    controller: Controller,
    bindings: {
        composition: '<'
    }
};
