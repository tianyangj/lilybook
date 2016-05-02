export class ComposerListController {

    composers: any[];

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private $stateParams: any,
        private Composer: any
    ) {
        this.Composer.find().$promise.then((composers: any) => {
            this.composers = composers;
        });
    }

    goto(composer) {
        this.$state.go('composer', { vanity: composer.id });
    }
}
