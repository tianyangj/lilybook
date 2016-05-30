export class LoginController {

    email: string;
    password: string;
    error: any;

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private $stateParams: any,
        private firebase: any
    ) { }

    login() {
        this.firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
            if (this.$stateParams.next) {
                this.$state.go(this.$stateParams.next.name);
            } else {
                this.$state.go('home');
            }
        }).catch(error => {
            this.error = error;
        });
    }
}
