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

    close() {
        this.$mdSidenav('left').close();
    }
}

export const SidenavComponent = {
    templateUrl: 'app/common/sidenav/sidenav.html',
    controller: Controller
};
