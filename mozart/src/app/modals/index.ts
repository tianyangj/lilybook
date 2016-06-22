import { LoginModal } from './login.service';

export function registerModals() {
    angular.module('lilybook')
        .service('loginModal', LoginModal);
}

