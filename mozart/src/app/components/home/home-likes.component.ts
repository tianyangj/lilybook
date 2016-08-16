import { CompositionDataService } from '../../common/data/composition.service';

class Controller {

    compositions = [];
    likesRef;

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
        // set parent controller to 3rd tab
        this.controller.activeTab = 2;
        // get user-likes reference
        this.likesRef = firebase.database().ref('/user-likes').child(this.user.$id);
        // get compositions by compositionIds
        this.$firebaseArray(this.likesRef).$loaded().then(likes => {
            this.compositions = this.compositionDataService.getMany(likes.map(like => like.$id));
        });
    }

    remove($event, composition) {
        const confirm = this.$mdDialog.confirm()
            .title('Would you like to remove "' + composition.title + '" from your Favorites?')
            .targetEvent($event)
            .ok('Remove')
            .cancel('Cancel')
            .clickOutsideToClose(true);
        this.$mdDialog.show(confirm).then(() => {
            const likeRef = this.likesRef.child(composition.$id);
            this.$firebaseObject(likeRef).$remove().then(() => {
                this.$onInit();
            });
        });
    }
}

export const HomeLikesComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/home/home-likes.html',
    controller: Controller,
    bindings: {
        user: '<'
    },
    require: {
        controller: '^lbHomeView'
    }
};
