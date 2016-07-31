import { AuthenticationService } from '../../common/services/authentication.service';
import { CollectionModalService } from '../../common/modals/collection.service';

class Controller {

    user;

    /** @ngInject */
    constructor(
        private toastr: any,
        private authenticationService: AuthenticationService,
        private collectionModalService: CollectionModalService
    ) { }

    $onInit() {
        this.authenticationService.authObj.$onAuthStateChanged(user => this.user = user);
    }

    add($event, composition) {
        this.authenticationService.getUser($event).then(user => {
            this.collectionModalService.show($event, composition, user).then((data) => {
                switch (data.event) {
                    case 'LB_COLLECTION_SAVED':
                        this.toastr.success(data.composition.title + ' has been added to your ' + data.collection.name + ' collection.');
                        break;
                    case 'LB_COLLECTION_REMOVED':
                        this.toastr.info(data.composition.title + ' has been removed from your ' + data.collection.name + ' collection.');
                        break;
                    case 'LB_COLLECTION_CREATED':
                        this.toastr.success(data.collection.name + ' collection has been created and ' + data.composition.title + ' has been added to your collection.');
                        break;
                }
            });
        });
    }
}

export const CompositionCollectionComponent: angular.IComponentOptions = {
    template: `
	    <md-button class="md-fab md-accent" ng-click="$ctrl.add($event, $ctrl.composition)">
       	    <md-tooltip md-direction="left">{{$ctrl.user ? 'Add to your collection.' : 'Login to add this composition to your collection.'}}</md-tooltip>
        	<md-icon class="material-icons">playlist_add</md-icon>
  	    </md-button>
    `,
    controller: Controller,
    bindings: {
        composition: '<'
    }
};
