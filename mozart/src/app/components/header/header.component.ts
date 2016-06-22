import { LoginModal } from '../../modals/login.service';

/** @ngInject */
export class HeaderComponentController {

    isAuthenticated: boolean;

    constructor(
        private $state: angular.ui.IStateService,
        private $mdSidenav: angular.material.ISidenavService,
        private firebase: any,
        private loginModal: LoginModal
    ) {
        firebase.auth().onAuthStateChanged(user => {
            this.isAuthenticated = !!user;
        });
    }

    toggleSidenav(sidenavId: string) {
        this.$mdSidenav(sidenavId).toggle();
    }

    login(ev) {
        this.loginModal.show(ev).then(() => {
            this.$state.reload();
        });
    }

    logout() {
        this.firebase.auth().signOut().then(() => {
            this.$state.go('app.splash');
        });
    }

    todo() {
        alert('todo');
    }
}

export let headerComponent = {
    templateUrl: 'app/components/header/header.html',
    controller: HeaderComponentController
};
