export class ComposerController {

    composer: any;
    additions: any[];
    populars: any[];

    /* @ngInject */
    constructor(
        private $stateParams: any,
        private Composer: any
    ) {
        this.Composer.findById({
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
        });
    }

    play(composition) {
        console.log('todo: play', composition);
    }

}
