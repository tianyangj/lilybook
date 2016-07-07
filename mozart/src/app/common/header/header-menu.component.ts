import { LoginModalService } from '../modals/login.service';

class Controller {

    /** @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private loginModalService: LoginModalService
    ) { }

    login(ev) {
        this.loginModalService.show(ev).then(() => {
            this.$state.reload();
        });
    }

    logout() {
        firebase.auth().signOut().then(() => {
            this.$state.go('splash');
        });
    }
}

export const HeaderMenuComponent: angular.IComponentOptions = {
    templateUrl: 'app/common/header/header-menu.html',
    controller: Controller,
    bindings: {
        user: '<'
    }
};
