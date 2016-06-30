export class UserDataService {

    private usersRef;

    /* @ngInject */
    constructor(
        private $firebaseObject,
        private $firebaseAuth
    ) {
        this.usersRef = firebase.database().ref('/users');
    }

    getAccount() {
        return this.$firebaseAuth().$requireSignIn().then(user => {
            return this.$firebaseObject(this.usersRef.child(user.uid));
        });
    }

    createAccount(account) {
        return this.$firebaseAuth().$createUserWithEmailAndPassword(account.email, account.password).then(user => {
            var userObject = this.$firebaseObject(this.usersRef.child(user.uid));
            userObject.firstname = account.firstname;
            userObject.lastname = account.lastname;
            return userObject.$save();
        });
    }
}
