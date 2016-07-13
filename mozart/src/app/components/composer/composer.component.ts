class ComposerComponentController {

    composer: any = {};
    additions: any[] = [];
    populars: any[] = [];

    /* @ngInject */
    constructor(
        private $stateParams: any,
        private $firebaseObject,
        private $firebaseArray
    ) {
        let start = performance.now();
        console.log('ComposerController.constructor', performance.now() - start);
        let composerRef = firebase.database().ref('/composers/' + $stateParams.vanity);
        $firebaseObject(composerRef).$loaded().then(composer => {
            console.log('composer callback', composer, performance.now() - start);
            this.composer = composer;
        });
        let composerCompositionsRef = firebase.database().ref('/composers/' + $stateParams.vanity + '/compositions');
        let query = composerCompositionsRef.orderByKey().limitToLast(5);
        $firebaseArray(query).$loaded().then(compositions => {
            console.log('composer.compositions callback', compositions, performance.now() - start);
            compositions.forEach(composition => {
                let compositionRef = firebase.database().ref('/compositions/' + composition.$id);
                $firebaseObject(compositionRef).$loaded().then(composition => {
                    console.log('composition callback', composition, performance.now() - start);
                    this.additions.push(composition);
                });
            });
        });
    }

    play(composition) {
        console.log('todo: play', composition);
    }
}

export const ComposerComponentView = {
    templateUrl: 'app/components/composer/composer.html',
    controller: ComposerComponentController
};
