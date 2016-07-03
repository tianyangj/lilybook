import { LoginModalService } from '../modals/login.service';

class HeaderComponentController {

    isAuthenticated: boolean;

    /** @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private $mdSidenav: angular.material.ISidenavService,
        private loginModalService: LoginModalService
    ) {
        firebase.auth().onAuthStateChanged(user => {
            this.isAuthenticated = !!user;
        });
    }

    toggleSidenav(sidenavId: string) {
        this.$mdSidenav(sidenavId).toggle();
    }

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

    todo() {
        alert('todo');
    }
}

export const HeaderComponent = {
    templateUrl: 'app/common/header/header.html',
    controller: HeaderComponentController
};
