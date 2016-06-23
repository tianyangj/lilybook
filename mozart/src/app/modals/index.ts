import { LoginModal } from './login.service';
import { SignupModal } from './signup.service';

export function registerModals() {
    angular.module('lilybook')
        .service('loginModal', LoginModal)
        .service('signupModal', SignupModal);
}

