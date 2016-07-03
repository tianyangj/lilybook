class SignupComponentViewController {

    email: string;
    password: string;
    error: any;

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private $stateParams: any
    ) { }

    login() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
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

export const SignupComponentView = {
    templateUrl: 'app/components/splash/signup.html',
    controller: SignupComponentViewController
};
