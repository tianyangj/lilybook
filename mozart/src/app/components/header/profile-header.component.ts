/** @ngInject */
class ProfileHeaderComponentController {

    constructor(
        private $mdSidenav: angular.material.ISidenavService
    ) { }

    toggleSidenav(sidenavId: string) {
        this.$mdSidenav(sidenavId).toggle();
    }

    share() {
        alert('todo share');
    }
}

export let profileHeaderComponent = {
    templateUrl: 'app/components/header/profile-header.html',
    controller: ProfileHeaderComponentController,
    bindings: {
        profile: '<'
    }
};
