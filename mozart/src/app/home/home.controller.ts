export class HomeController {

    recommendations: any[];

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private Composition: any
    ) {
        this.Composition.find({
            filter: { limit: 10 }
        }).$promise.then((compositions: any[]) => {
            this.recommendations = compositions;
        });
    }

}
