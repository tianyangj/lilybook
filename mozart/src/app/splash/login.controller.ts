export class LoginController {

    email: string;
    password: string;
    firebaseAuth;

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private $stateParams: any,
        private $firebaseAuth,
        private $mdToast
    ) {
        this.firebaseAuth = $firebaseAuth();
    }

    login() {
        this.firebaseAuth.$signInWithEmailAndPassword(this.email, this.password).then(user => {
            if (this.$stateParams.next) {
                this.$state.go(this.$stateParams.next.name);
            } else {
                this.$state.go('app.home');
            }
        }).catch(error => {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(error.message)
                    .position('top right')
                    .hideDelay(3000)
            );
        });
    }
}
