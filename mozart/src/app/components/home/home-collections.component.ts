import { CompositionDataService } from '../../common/data/composition.service';

class Controller {

    collections = [];
    compositions = {};

    private user;
    private controller;

    /* @ngInject */
    constructor(
        private $firebaseObject,
        private compositionDataService: CompositionDataService
    ) { }

    $onInit() {
        const collectionsRef = firebase.database().ref('/user-collections').child(this.user.$id);
        this.$firebaseObject(collectionsRef).$loaded().then(collections => {
            let compositionIds = [];
            angular.forEach(collections, collection => {
                compositionIds = compositionIds.concat(collection.compositions);
                this.collections.push(collection);
            });
            compositionIds.filter((compositionId, index, self) => {
                return self.indexOf(compositionId) === index;
            }).forEach(compositionId => {
                this.compositionDataService.get(compositionId).$loaded(composition => {
                    this.compositions[compositionId] = composition;
                });
            });
        });
        this.controller.activeTab = 3;
    }
}

export const HomeCollectionsComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/home/home-collections.html',
    controller: Controller,
    bindings: {
        user: '<'
    },
    require: {
        controller: '^lbHomeView'
    }
};
