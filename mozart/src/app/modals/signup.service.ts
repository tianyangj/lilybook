import { LoginModal } from './login.service';
import { UserService } from '../data/user.service';


class SignupController {

    firstname: string;
    lastname: string;
    email: string;
    password: string;

    /* @ngInject */
    constructor(
        private $mdDialog: angular.material.IDialogService,
        private $mdToast,
        private $firebaseAuth,
        private $state: angular.ui.IStateService,
        private loginModal: LoginModal,
        private userService: UserService
    ) { }

    signup() {
        this.userService.createAccount({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password
        }).then(user => {
            this.$mdDialog.hide(user);
            this.$state.go('app.home');
        }).catch(error => {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(error.message)
                    .position('top right')
                    .hideDelay(3000)
            );
        });
    }

    login(ev) {
        this.loginModal.show(ev);
    }

    cancel() {
        this.$mdDialog.cancel();
    }
}

export class SignupModal {

    /* @ngInject */
    constructor(
        private $mdDialog: angular.material.IDialogService
    ) { }

    show(ev) {
        return this.$mdDialog.show({
            controller: SignupController,
            controllerAs: '$ctrl',
            templateUrl: 'app/modals/signup.html',
            targetEvent: ev
        });
    }

}
