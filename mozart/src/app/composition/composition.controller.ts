export class CompositionController {

    /* @ngInject */
    constructor(
        private $stateParams: any,
        private composition: any
    ) {
        console.log('CompositionController', this.composition);
    }

}
