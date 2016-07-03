import { LoginModalService } from './login.service';
import { UserDataService } from '../data/user.service';


class SignupModalController {

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
        private loginModalService: LoginModalService,
        private userDataService: UserDataService
    ) { }

    signup() {
        this.userDataService.createAccount({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password
        }).then(user => {
            this.$mdDialog.hide(user);
            this.$state.go('home');
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
        this.loginModalService.show(ev);
    }

    cancel() {
        this.$mdDialog.cancel();
    }
}

export class SignupModalService {

    /* @ngInject */
    constructor(
        private $mdDialog: angular.material.IDialogService
    ) { }

    show(ev) {
        return this.$mdDialog.show({
            controller: SignupModalController,
            controllerAs: '$ctrl',
            templateUrl: 'app/common/modals/signup.html',
            targetEvent: ev
        });
    }

}
