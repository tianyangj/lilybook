export class ComposerController {

    composer: any;
    additions: any[] = [];
    populars: any[] = [];

    /* @ngInject */
    constructor(
        private $stateParams: any,
        private $timeout: angular.ITimeoutService,
        private Composer: any,
        private firebase: any
    ) {
        console.log('start', performance.now())
        firebase.database().ref('/composers/' + $stateParams.vanity).once('value').then(snapshot => {
            return $timeout(() => {
                this.composer = snapshot.val();
                this.composer.id = $stateParams.vanity;
                this.composer.hero = '//placehold.it/851x315?text=composer+hero+image';
                return this.composer;
            });
        }).then(composer => {
            /*firebase.database().ref('/compositions')
                .orderByChild('composerId')
                .equalTo($stateParams.vanity)
                .once('value').then(snapshot => {
                    $timeout(() => {
                        this.additions = snapshot.val();
                    });
                });*/
        });
        firebase.database().ref('/composers/' + $stateParams.vanity + '/compositions')
            .orderByKey()
            .once('value').then(snapshot => {
                console.log('compositions', performance.now())
                snapshot.forEach(childSnapshot => {
                    firebase.database().ref('/compositions/' + childSnapshot.key).once('value').then(ss => {
                        console.log('loop', performance.now())
                        $timeout(() => {
                            this.additions.push(ss.val());
                        });
                    })
                })
            })
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
