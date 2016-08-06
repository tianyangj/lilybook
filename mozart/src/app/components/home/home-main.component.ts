import { CompositionDataService } from '../../common/data/composition.service';

class Controller {

    compositions = [];
    compositions1 = [];

    private user;
    private controller;

    /* @ngInject */
    constructor(
        private $firebaseArray,
        private compositionDataService: CompositionDataService
    ) { }

    $onInit() {
        const chopinRef = firebase.database().ref('/composers/chopin/compositions');
        const chopinQuery = chopinRef.orderByKey().limitToLast(5);
        this.$firebaseArray(chopinQuery).$loaded().then(compositions => {
            angular.forEach(compositions, (composition) => {
                this.compositionDataService.get(composition.$id).$loaded(composition => {
                    this.compositions.push(composition);
                });
            });
        });
        const beethovenRef = firebase.database().ref('/composers/beethoven/compositions');
        const beethovenQuery = beethovenRef.orderByKey().limitToLast(5);
        this.$firebaseArray(beethovenQuery).$loaded().then(compositions => {
            angular.forEach(compositions, (composition) => {
                this.compositionDataService.get(composition.$id).$loaded(composition => {
                    this.compositions1.push(composition);
                });
            });
        });
        this.controller.activeTab = 0;
    }
}

export const HomeMainComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/home/home-main.html',
    controller: Controller,
    bindings: {
        user: '<'
    },
    require: {
        controller: '^lbHomeView'
    }
};
