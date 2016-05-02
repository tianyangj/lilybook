export class ComposerHeroComponentController {

    composer: any;

    /** @ngInject */
    constructor(
        private $scope: angular.IScope
    ) {
        this.$scope.$watch(() => {
            return this.composer;
        }, (composer: any) => {
            if (composer) {
                console.log(composer);
            }
        });
    }
}

export let composerHeroComponent = {
    templateUrl: 'app/components/composer-hero/composer-hero.html',
    controller: ComposerHeroComponentController,
    bindings: {
        composer: '<'
    }
};
