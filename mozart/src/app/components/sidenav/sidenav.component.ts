/** @ngInject */
export class SidenavComponentController {

    isAuthenticated = false;

    constructor(
        private $rootScope: angular.IRootScopeService,
        private $mdSidenav: angular.material.ISidenavService,
        private $firebaseAuth
    ) {
        $firebaseAuth().$onAuthStateChanged(user => {
            this.isAuthenticated = !!user;
        });
    }

    close() {
        this.$mdSidenav('left').close();
    }
}

export let sidenavComponent = {
    templateUrl: 'app/components/sidenav/sidenav.html',
    controller: SidenavComponentController
};
