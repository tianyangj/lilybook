class VideoHeroController {

    videoType: string;
    youtubeId: string;
    srcUrl: string;

    private hero: any;

    /** @ngInject */
    constructor(
        private $window: any,
        private $timeout: angular.ITimeoutService,
        private $sce: angular.ISCEService
    ) { }

    $onInit() {
        if (angular.isString(this.hero)) {
            this.videoType = 'youtube';
            this.youtubeId = this.hero.substr(this.hero.indexOf('?v=') + 3);
        } else if (this.hero) {
            this.videoType = 'html5';
            this.srcUrl = this.$sce.trustAsResourceUrl(this.hero.src);
        }
        this.$timeout(() => {
            this.$window.plyr.setup();
        });
    }
}

export const VideoHeroComponent = {
    template: `
        <div class="plyr" ng-switch="$ctrl.videoType">
            <div ng-switch-when="youtube">
                <div data-video-id="{{$ctrl.youtubeId}}" data-type="youtube"></div>
            </div>
            <video ng-switch-when="html5" poster="/assets/images/poster.png" controls>
                <source ng-attr-src="{{$ctrl.srcUrl}}" type="video/webm">
            </video>
        </div>
    `,
    controller: VideoHeroController,
    bindings: {
        hero: '<'
    }
};
