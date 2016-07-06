import { LoginModalService } from '../modals/login.service';
import { AuthenticationService } from '../services/authentication.service';

class Controller {

    user;

    /** @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private $mdSidenav: angular.material.ISidenavService,
        private loginModalService: LoginModalService,
        private authenticationService: AuthenticationService
    ) { }

    $onInit() {
        this.authenticationService.authObj.$onAuthStateChanged(user => this.user = user);
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

export const HeaderSearchComponent = {
    templateUrl: 'app/common/header/header-search.html',
    controller: Controller
};
