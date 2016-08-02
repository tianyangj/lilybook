class Controller {

    private controller;

    $onInit() {
        this.controller.selectedIndex = 2;
    }
}

export const CompositionVideosComponentView: angular.IComponentOptions = {
    template: `
        <div class="md-padding">Videos section coming soon...</div>
    `,
    controller: Controller,
    bindings: {
        composition: '<'
    },
    require: {
        controller: '^lbCompositionView'
    }
};
