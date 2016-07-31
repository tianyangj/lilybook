import { AuthenticationService } from '../../common/services/authentication.service';

class Controller {

    likesRef;

    /** @ngInject */
    constructor(
        private $firebaseObject,
        private authenticationService: AuthenticationService
    ) { }

    $onInit() {
        this.likesRef = firebase.database().ref('/user-likes');
    }

    like($event, composition) {
        console.log(composition);
        this.authenticationService.getUser($event).then(user => {
            const likes = this.$firebaseObject(this.likesRef.child(user.uid));
            likes[composition.$id] = true;
            likes.$save();
        });
    }
}

export const CompositionLikeComponent: angular.IComponentOptions = {
    template: `
        <md-button class="md-fab md-mini md-primary" ng-click="$ctrl.like($event, $ctrl.composition)">
   	        <md-tooltip md-direction="left">I like this.</md-tooltip>
         	<md-icon class="material-icons">thumb_up</md-icon>
   	    </md-button>
    `,
    controller: Controller,
    bindings: {
        composition: '<'
    }
};
