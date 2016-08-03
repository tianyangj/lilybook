import { CompositionDataService } from '../../common/data/composition.service';

class Controller {

    compositions = [];

    private user;
    private controller;

    /* @ngInject */
    constructor(
        private $firebaseObject,
        private compositionDataService: CompositionDataService
    ) {

    }

    $onInit() {
        const likesRef = firebase.database().ref('/user-likes').child(this.user.$id);
        this.$firebaseObject(likesRef).$loaded().then(likes => {
            angular.forEach(likes, (value, compositionId) => {
                this.compositionDataService.get(compositionId).$loaded(composition => {
                    this.compositions.push(composition);
                });
            });
        });
        this.controller.activeTab = 2;
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
