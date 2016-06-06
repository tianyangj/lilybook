/** @ngInject */
class VideoHeroController {

    videoId: string;

    private hero: any;

    constructor(
        private $window: any,
        private $timeout: angular.ITimeoutService
    ) {
        if (this.hero) {
            this.videoId = this.hero.substr(this.hero.indexOf('?v=') + 3);
            $timeout(() => {
                $window.plyr.setup();
            });
        }
    }
}

export let videoHeroComponent = {
    templateUrl: 'app/components/video-hero/video-hero.html',
    controller: VideoHeroController,
    bindings: {
        hero: '<'
    }
};
