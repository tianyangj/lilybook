class CollectionModalController {

    collectionsRef;
    collectionsArray;
    collections;
    collectionName: string;
    collectionExistingDisabled = false;

    private user;
    private composition;

    /* @ngInject */
    constructor(
        private $mdDialog: angular.material.IDialogService,
        private $firebaseArray
    ) {
        this.collectionsRef = firebase.database().ref('/user-collections').child(this.user.uid);
        this.collectionsArray = this.$firebaseArray(this.collectionsRef);
        this.collectionsArray.$loaded().then(collections => {
            this.collectionExistingDisabled = collections.length < 1;
            this.collections = collections.map(collection => {
                return {
                    id: collection.$id,
                    name: collection.name,
                    selected: collection.compositions && collection.compositions[this.composition.$id]
                };
            });
        });
    }

    update(collection) {
        let record = this.collectionsArray.$getRecord(collection.id);
        if (collection.selected) {
            record.compositions = record.compositions || {};
            record.compositions[this.composition.$id] = true;
            this.collectionsArray.$save(record);
            this.$mdDialog.hide({
                event: 'LB_COLLECTION_SAVED',
                composition: this.composition,
                collection: record
            });
        } else {
            record.compositions[this.composition.$id] = null;
            this.collectionsArray.$save(record);
            this.$mdDialog.hide({
                event: 'LB_COLLECTION_REMOVED',
                composition: this.composition,
                collection: record
            });
        }
    }

    create() {
        let record = {
            name: this.collectionName,
            compositions: { [this.composition.$id]: true }
        };
        this.collectionsArray.$add(record);
        this.$mdDialog.hide({
            event: 'LB_COLLECTION_CREATED',
            composition: this.composition,
            collection: record
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }
}

export class CollectionModalService {

    /* @ngInject */
    constructor(
        private $mdDialog: angular.material.IDialogService
    ) { }

    show(ev, composition, user) {
        return this.$mdDialog.show({
            controller: CollectionModalController,
            controllerAs: '$ctrl',
            bindToController: true,
            locals: {
                composition,
                user
            },
            templateUrl: 'app/common/modals/collection.html',
            targetEvent: ev,
            clickOutsideToClose: true
        });
    }

}
