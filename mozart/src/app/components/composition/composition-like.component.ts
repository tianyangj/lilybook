import { AuthenticationService } from '../../common/services/authentication.service';

class Controller {

    likesRef;
    liked = false;

    private composition;

    /** @ngInject */
    constructor(
        private toastr: any,
        private $firebaseObject,
        private authenticationService: AuthenticationService
    ) { }

    $onInit() {
        this.likesRef = firebase.database().ref('/user-likes');
        this.authenticationService.authObj.$onAuthStateChanged(user => {
            if (user) {
                this.$firebaseObject(this.likesRef.child(user.uid)).$loaded().then(likes => {
                    this.liked = likes[this.composition.$id];
                });
            }
        });
    }

    like($event, composition) {
        this.authenticationService.getUser($event).then(user => {
            if (user) {
                this.$firebaseObject(this.likesRef.child(user.uid)).$loaded().then(likes => {
                    if (likes[composition.$id]) {
                        this.liked = false;
                        delete likes[composition.$id];
                        this.toastr.info('You unliked ' + composition.title);
                    } else {
                        this.liked = true;
                        likes[composition.$id] = true;
                        this.toastr.success('You liked ' + composition.title);
                    }
                    likes.$save();
                });
            }
        });
    }
}

export const CompositionLikeComponent: angular.IComponentOptions = {
    template: `
	    <md-button class="md-fab md-mini" ng-class="$ctrl.liked ? 'md-accent': 'md-primary'" ng-click="$ctrl.like($event, $ctrl.composition)">
      	    <md-tooltip md-direction="left">{{$ctrl.liked ? 'Unlike': 'I like this'}}</md-tooltip>
        	<md-icon class="material-icons">{{$ctrl.liked ? 'favorite': 'favorite_border'}}</md-icon>
 	    </md-button>
    `,
    controller: Controller,
    bindings: {
        composition: '<'
    }
};
