export class HomeController {

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private Account: any
    ) {
        console.log('HomeController');
    }

}
