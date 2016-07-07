import { AuthenticationService } from '../services/authentication.service';

class Controller {

    user;

    /** @ngInject */
    constructor(
        private $mdSidenav: angular.material.ISidenavService,
        private authenticationService: AuthenticationService
    ) { }

    $onInit() {
        this.authenticationService.authObj.$onAuthStateChanged(user => this.user = user);
    }

    toggleSidenav(sidenavId: string) {
        this.$mdSidenav(sidenavId).toggle();
    }
}

export const HeaderComponent = {
    templateUrl: 'app/common/header/header.html',
    controller: Controller
};
