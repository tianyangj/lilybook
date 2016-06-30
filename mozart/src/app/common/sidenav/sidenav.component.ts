class SidenavComponentController {

    isAuthenticated = false;

    /** @ngInject */
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

export const SidenavComponent = {
    templateUrl: 'app/common/sidenav/sidenav.html',
    controller: SidenavComponentController
};
