/* @ngInject */
export function getComposition($stateParams: any, Composition: any) {

    return Composition.findById({
        id: $stateParams.id
    }).$promise.then((response: any) => {
        console.log(response);
    });
}
