/** @ngInject */
export class HeaderComponentController {

    isAuthenticated: boolean;

    constructor(
        private $state: angular.ui.IStateService,
        private $mdSidenav: angular.material.ISidenavService,
        private firebase: any
    ) {
        firebase.auth().onAuthStateChanged(user => {
            this.isAuthenticated = !!user;
        });
    }

    toggleSidenav(sidenavId: string) {
        this.$mdSidenav(sidenavId).toggle();
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
