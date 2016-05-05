/* @ngInject */
export function getComposition($stateParams, Composition) {

    return Composition.detail({
        id: $stateParams.id
    }).$promise.then((response: any) => {
        var composition = angular.copy(response.composition);
        delete response.composition;
        return angular.extend(composition, response);
    });
}
