export class LoginController {

    email: string;
    password: string;
    error: any;

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private $stateParams: any,
        private Account: any
    ) { }

    login() {
        this.Account.login({
            email: this.email,
            password: this.password
        }).$promise.then(() => {
            if (this.$stateParams.next) {
                this.$state.go(this.$stateParams.next.name);
            } else {
                this.$state.go('home');
            }
        }).catch((response: any) => {
            this.error = response.data ? response.data.error : {
                message: 'The application has encountered an unknown error.'
            };
        });
    }
}
