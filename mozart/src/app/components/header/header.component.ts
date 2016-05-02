/** @ngInject */
export class HeaderComponentController {

    isAuthenticated: boolean;

    constructor(
        private $rootScope: angular.IRootScopeService,
        private $state: angular.ui.IStateService,
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

    toggleSidenav(sidenavId: string) {
        this.$mdSidenav(sidenavId).toggle();
    }

    logout() {
        this.Account.logout().$promise.then(() => {
            this.$state.go('splash');
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
