export class CompositionController {

    height: string = '300px';

    /* @ngInject */
    constructor(
        private $stateParams: any,
        private composition: any
    ) {
        console.log('CompositionController', this.composition);
    }

    toggleHero() {
        this.height = this.height === '300px' ? '50px' : '300px';
    }

}
