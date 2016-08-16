import { CompositionDataService } from '../../common/data/composition.service';

class Controller {

    collections = [];
    collectionsRef;

    private user;
    private controller;

    /* @ngInject */
    constructor(
        private $mdDialog,
        private $firebaseArray,
        private $firebaseObject,
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
                    $id: collection.$id,
                    name: collection.name,
                    compositions: this.compositionDataService.getMany(Object.keys(collection.compositions || {}))
                };
            });
        });
    }

    removeCollection($event, collection) {
        const confirm = this.$mdDialog.confirm()
            .title('Would you like to remove "' + collection.name + '" Collection?')
            .targetEvent($event)
            .ok('Remove')
            .cancel('Cancel')
            .clickOutsideToClose(true);
        this.$mdDialog.show(confirm).then(() => {
            const collectionRef = this.collectionsRef.child(collection.$id);
            this.$firebaseObject(collectionRef).$remove().then(() => {
                this.$onInit();
            });
        });
    }

    removeComposition($event, composition, collection) {
        const confirm = this.$mdDialog.confirm()
            .title('Would you like to remove "' + composition.title + '" from "' + collection.name + '"?')
            .targetEvent($event)
            .ok('Remove')
            .cancel('Cancel')
            .clickOutsideToClose(true);
        this.$mdDialog.show(confirm).then(() => {
            const compositionRef = this.collectionsRef.child(collection.$id).child('compositions').child(composition.$id);
            this.$firebaseObject(compositionRef).$remove().then(() => {
                this.$onInit();
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
