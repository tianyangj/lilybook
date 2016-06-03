/* @ngInject */
export function getComposition($stateParams, $firebaseObject, firebase) {

    let compositionRef = firebase.database().ref('/compositions/' + $stateParams.id);
    return $firebaseObject(compositionRef).$loaded();
}
