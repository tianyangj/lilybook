import { CompositionDataService } from '../../common/data/composition.service';

class ComposerComponentController {

    compositions;

    private composer;

    /* @ngInject */
    constructor(
        private $firebaseArray,
        private compositionDataService: CompositionDataService
    ) { }

    $onInit() {
        if (this.composer.$value !== null) {
            let ref = firebase.database().ref('/index-composers').child(this.composer.$id);
            this.$firebaseArray(ref).$loaded().then(compositions => {
                let compositionIds = compositions.map(composition => composition.$id);
                this.compositions = this.compositionDataService.getMany(compositionIds);
            });
        }
    }
}

export const ComposerComponentView = {
    templateUrl: 'app/components/composer/composer.html',
    controller: ComposerComponentController,
    bindings: {
        composer: '<'
    }
};
