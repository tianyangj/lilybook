class Controller {

    isOpen;
    user;

    /** @ngInject */
    constructor(
        private $firebaseAuth
    ) { }

    $onInit() {
        this.isOpen = false;
        this.user = this.$firebaseAuth().$getAuth();
    }
}

export const CompositionFabComponent: angular.IComponentOptions = {
    templateUrl: 'app/components/composition/composition-fab.html',
    controller: Controller,
    bindings: {
        composition: '<'
    }
};
