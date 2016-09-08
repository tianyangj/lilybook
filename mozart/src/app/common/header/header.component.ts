import { AuthenticationService } from '../services/authentication.service';

const template = `
    <md-toolbar>
        <div class="md-toolbar-tools">
            <md-button class="md-icon-button" ng-click="$ctrl.toggleSidenav('left')">
                <md-icon class="material-icons">menu</md-icon>
            </md-button>
            <h2 class="md-padding">
                <a ui-sref="splash" style="font-weight:bold;">LilyBook</a>
            </h2>
            <span flex></span>
            <lb-header-search></lb-header-search>
            <lb-header-menu user="$ctrl.user"></lb-header-menu>
        </div>
    </md-toolbar>
`;

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
    template: template,
    controller: Controller
};
