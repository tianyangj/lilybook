class LoginController {

    email: string;
    password: string;

    /* @ngInject */
    constructor(
        private $mdDialog: angular.material.IDialogService,
        private $mdToast,
        private $firebaseAuth
    ) { }

    login() {
        this.$firebaseAuth().$signInWithEmailAndPassword(this.email, this.password).then(user => {
            this.$mdDialog.hide(user);
        }).catch(error => {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(error.message)
                    .position('top right')
                    .hideDelay(3000)
            );
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }
}

export class LoginModal {

    /* @ngInject */
    constructor(
        private $mdDialog: angular.material.IDialogService
    ) { }

    show(ev) {
        return this.$mdDialog.show({
            controller: LoginController,
            controllerAs: '$ctrl',
            templateUrl: 'app/modals/login.html',
            targetEvent: ev,
            clickOutsideToClose: true
        });
    }

}
