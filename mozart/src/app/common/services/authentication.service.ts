export class AuthenticationService {

    authObj;

    /* @ngInject */
    constructor(
        private $firebaseAuth
    ) {
        this.authObj = $firebaseAuth();
    }
}
