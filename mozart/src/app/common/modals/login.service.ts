import { SignupModalService } from './signup.service';

class LoginModalController {

    email: string;
    password: string;

    /* @ngInject */
    constructor(
        private $mdDialog: angular.material.IDialogService,
        private $mdToast,
        private $firebaseAuth,
        private signupModalService: SignupModalService
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

    signup(ev) {
        this.signupModalService.show(ev);
    }

    cancel() {
        this.$mdDialog.cancel();
    }
}

export class LoginModalService {

    /* @ngInject */
    constructor(
        private $mdDialog: angular.material.IDialogService
    ) { }

    show(ev) {
        return this.$mdDialog.show({
            controller: LoginModalController,
            controllerAs: '$ctrl',
            templateUrl: 'app/common/modals/login.html',
            targetEvent: ev,
            clickOutsideToClose: true
        });
    }

}
