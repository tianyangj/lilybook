export class ResolverService {

    /* @ngInject */
    constructor(
        private $firebaseAuth,
        private $q,
        private $state
    ) { }

    redirectIfSignIn(state: string = 'app.home') {
        return this.$firebaseAuth().$waitForSignIn().then(user => {
            if (user) {
                this.$state.go(state);
                return this.$q.reject();
            }
            return this.$q.resolve();
        });
    }
}
