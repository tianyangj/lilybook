import { AuthenticationService } from '../../common/services/authentication.service';
import { CollectionModalService } from '../../common/modals/collection.service';
import { LoginModalService } from '../../common/modals/login.service';

class Controller {

    isOpen;
    user;
    composition;

    /** @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private collectionModalService: CollectionModalService,
        private loginModalService: LoginModalService,
        private authenticationService: AuthenticationService
    ) { }

    $onInit() {
        this.isOpen = false;
        this.authenticationService.authObj.$onAuthStateChanged(user => this.user = user);
    }

    login($event) {
        this.loginModalService.show($event).then(() => {
            this.$state.reload();
        });
    }

    addCollection($event) {
        this.collectionModalService.show($event, this.composition, this.user).then(() => {
            console.log('todo: show toast');
        });
    }
}

export const CompositionFabComponent: angular.IComponentOptions = {
    templateUrl: 'app/components/composition/composition-fab.html',
    controller: Controller,
    bindings: {
        composition: '<'
    }
};
