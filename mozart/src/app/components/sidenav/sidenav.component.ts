/** @ngInject */
export class SidenavComponentController {

    isAuthenticated: boolean;

    constructor(
        private $rootScope: angular.IRootScopeService,
        private $mdSidenav: angular.material.ISidenavService,
        private Account: any,
        private LoopBackAuth: any
    ) {
        this.$rootScope.$watch(() => {
            return this.LoopBackAuth.currentUserData;
        }, (currentUserData: any) => {
            this.isAuthenticated = currentUserData !== null;
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
