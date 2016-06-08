/** @ngInject */
class ProfileSidenavComponentController {

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

export let profileSidenavComponent = {
    templateUrl: 'app/components/sidenav/profile-sidenav.html',
    controller: ProfileSidenavComponentController,
    bindings: {
        bookmarks: '<',
        likes: '<',
        repertoire: '<'
    }
};
