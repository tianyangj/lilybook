export class UserService {

    private usersRef;

    /* @ngInject */
    constructor(
        private $firebaseObject,
        private $firebaseAuth,
        private firebase
    ) {
        this.usersRef = firebase.database().ref('/users');
    }

    getAccount() {
        return this.$firebaseAuth().$requireSignIn().then(user => {
            return this.$firebaseObject(this.usersRef.child(user.uid));
        });
    }
}
