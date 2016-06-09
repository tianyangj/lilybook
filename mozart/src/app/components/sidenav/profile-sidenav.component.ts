/** @ngInject */
class ProfileSidenavComponentController {

    constructor(
        private $mdSidenav: angular.material.ISidenavService
    ) { }

    close() {
        this.$mdSidenav('left').close();
    }
}

export let profileSidenavComponent = {
    templateUrl: 'app/components/sidenav/profile-sidenav.html',
    controller: ProfileSidenavComponentController,
    bindings: {
        bookmarks: '<',
        likes: '<',
        repertoire: '<'
    }
};
