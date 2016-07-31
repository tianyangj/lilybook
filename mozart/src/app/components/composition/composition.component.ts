import { AuthenticationService } from '../../common/services/authentication.service';

class CompositionComponentController {

    composition;
    user;

    /* @ngInject */
    constructor(
        private authenticationService: AuthenticationService
    ) { }

    $onInit() {
        this.authenticationService.authObj.$onAuthStateChanged(user => this.user = user);
    }
}

export const CompositionComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/composition/composition.html',
    controller: CompositionComponentController,
    bindings: {
        composition: '<'
    }
};
