class CollectionModalController {

    collectionsRef;
    collectionsArray;
    collections;
    collectionName: string;

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
            this.collections = collections.map(collection => {
                return {
                    id: collection.$id,
                    name: collection.name,
                    selected: collection.compositions && collection.compositions.indexOf(this.composition.$id) > -1
                };
            });
        });
    }

    update(collection) {
        let record = this.collectionsArray.$getRecord(collection.id);
        if (collection.selected) {
            record.compositions = record.compositions || [];
            record.compositions.push(this.composition.$id);
            this.collectionsArray.$save(record);
            this.$mdDialog.hide();
        } else {
            let index = record.compositions.indexOf(this.composition.$id);
            record.compositions.splice(index, 1);
            this.collectionsArray.$save(record);
            this.$mdDialog.hide();
        }
    }

    create() {
        let record = {
            name: this.collectionName,
            compositions: [this.composition.$id]
        };
        this.collectionsArray.$add(record);
        this.$mdDialog.hide();
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
