import { LoginModalService } from '../modals/login.service';

export class AuthenticationService {

    authObj;

    /* @ngInject */
    constructor(
        private $q: angular.IQService,
        private $firebaseAuth,
        private loginModalService: LoginModalService
    ) {
        this.authObj = $firebaseAuth();
    }

    getUser($event: angular.IAngularEvent): angular.IPromise<any> {
        const user = this.authObj.$getAuth();
        if (!user) {
            return this.loginModalService.show($event);
        }
        return this.$q.resolve(user);
    }
}
