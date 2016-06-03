/* @ngInject */
export function waitForSignIn($firebaseAuth) {
    return $firebaseAuth().$waitForSignIn();
}

/* @ngInject */
export function requireSignIn($firebaseAuth) {
    return $firebaseAuth().$requireSignIn();
}
