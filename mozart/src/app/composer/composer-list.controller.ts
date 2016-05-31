export class ComposerListController {

    composers;

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private $timeout: angular.ITimeoutService,
        private firebase: any
    ) {
        firebase.database().ref('/composers').once('value').then(snapshot => {
            $timeout(() => {
                this.composers = snapshot.val();
            });
        });
    }

    goto(id) {
        this.$state.go('composer', { vanity: id });
    }
}
