/* @ngInject */
export function getComposition($stateParams, $timeout, Composition, firebase) {

    /*return Composition.detail({
        id: $stateParams.id
    }).$promise.then((response: any) => {
        var composition = angular.copy(response.composition);
        delete response.composition;
        return angular.extend(composition, response);
    });*/

    return firebase.database().ref('/compositions/' + $stateParams.id).once('value').then(snapshot => {
        let composition = snapshot.val();
        composition.id = $stateParams.id;
        return composition;
    });
}
