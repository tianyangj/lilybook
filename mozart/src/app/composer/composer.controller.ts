export class ComposerController {

    composer: any = {};
    additions: any[] = [];
    populars: any[] = [];

    /* @ngInject */
    constructor(
        private $stateParams: any,
        private $timeout: angular.ITimeoutService,
        private Composer: any,
        private firebase: any
    ) {
        let start = performance.now();
        console.log('ComposerController.constructor', performance.now() - start);
        let composerPath = '/composers/' + $stateParams.vanity;
        firebase.database().ref(composerPath).once('value').then(snapshot => {
            console.log('snapshot callback', composerPath, performance.now() - start);
            return $timeout(() => {
                console.log('composer timeout', performance.now() - start);
                return angular.extend(this.composer, snapshot.val(), {
                    id: $stateParams.vanity,
                    hero: '//placehold.it/851x315?text=composer+hero+image'
                });
            });
        }).then(composer => {
            console.log('composer', this.composer, performance.now() - start);
        });
        let composerCompositionsPath = composerPath + '/compositions';
        firebase.database().ref(composerCompositionsPath)
            .orderByKey()
            .once('value').then(snapshot => {
                console.log('snapshot callback', composerCompositionsPath, performance.now() - start);
                snapshot.forEach(composition => {
                    firebase.database().ref('/compositions/' + composition.key).once('value').then(ss => {
                        console.log('composition callback', performance.now() - start);
                        $timeout(() => {
                            this.additions.push(ss.val());
                        });
                    });
                });
            });
        /*this.Composer.findById({
            id: this.$stateParams.vanity
        }).$promise.then((composer: any) => {
            this.composer = composer;
            this.composer.hero = '//placehold.it/851x315?text=composer+hero+image';

            Composer.compositions({
                id: this.composer.id,
                filter: {
                    order: 'id DESC',
                    limit: 5
                }
            }).$promise.then(compositions => this.additions = compositions);

            Composer.compositions({
                id: this.composer.id,
                filter: {
                    order: 'id ASC',
                    limit: 10
                }
            }).$promise.then(compositions => this.populars = compositions);
        });*/
    }

    play(composition) {
        console.log('todo: play', composition);
    }

}
