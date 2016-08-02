class Controller {

    query;

    /* @ngInject */
    constructor(
        private $stateParams: any
    ) { }

    $onInit() {
        this.query = this.$stateParams;
    }
}

export const BrowseComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/browse/browse.html',
    controller: Controller
};
