import { CompositionDataService } from '../../common/data/composition.service';

class Controller {

    collections = [];
    collectionsRef;

    private user;
    private controller;

    /* @ngInject */
    constructor(
        private $firebaseArray,
        private compositionDataService: CompositionDataService
    ) { }

    $onInit() {
        // set parent controller to 4th tab
        this.controller.activeTab = 3;
        // get user-collections reference
        this.collectionsRef = firebase.database().ref('/user-collections').child(this.user.$id);
        this.$firebaseArray(this.collectionsRef).$loaded().then(collections => {
            this.collections = collections.map(collection => {
                return {
                    id: collection.$id,
                    name: collection.name,
                    compositions: this.compositionDataService.getMany(Object.keys(collection.compositions))
                };
            });
        });
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
