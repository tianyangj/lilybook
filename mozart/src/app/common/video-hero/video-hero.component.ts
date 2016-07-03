class VideoHeroController {

    videoId: string;

    private hero: any;

    /** @ngInject */
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

export const VideoHeroComponent = {
    templateUrl: 'app/common/video-hero/video-hero.html',
    controller: VideoHeroController,
    bindings: {
        hero: '<'
    }
};
