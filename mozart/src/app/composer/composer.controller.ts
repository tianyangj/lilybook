export class ComposerController {

    composer: any;

    /* @ngInject */
    constructor(
        private $stateParams: any,
        private Composer: any
    ) {
        this.Composer.findById({
            id: this.$stateParams.vanity
        }).$promise.then((composer: any) => {
            this.composer = composer;
        });
    }

}
