class Controller {

    likesRef;

    private composition;
    private user;

    /** @ngInject */
    constructor(
        private $firebaseArray
    ) { }

    $onInit() {
        this.likesRef = firebase.database().ref('/user-likes');
    }

    $onChanges(changes) {
        if (changes.user && changes.user.currentValue) {
            this.user = changes.user.currentValue;
            console.log(this.user, this.composition);
        }
    }
}

export const CompositionLikeComponent: angular.IComponentOptions = {
    template: `
        <md-button class="md-fab md-mini md-primary" ng-click="$ctrl.like()">
   	        <md-tooltip md-direction="left">I like this.</md-tooltip>
         	<md-icon class="material-icons">thumb_up</md-icon>
   	    </md-button>
    `,
    controller: Controller,
    bindings: {
        composition: '<',
        user: '<'
    }
};
