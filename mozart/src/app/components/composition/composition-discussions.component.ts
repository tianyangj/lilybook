class Controller {

    private controller;

    $onInit() {
        this.controller.selectedIndex = 3;
    }
}

export const CompositionDiscussionsComponentView: angular.IComponentOptions = {
    template: `
        <div class="md-padding">Discussions section coming soon...</div>
    `,
    controller: Controller,
    bindings: {
        composition: '<'
    },
    require: {
        controller: '^lbCompositionView'
    }
};
