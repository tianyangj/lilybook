/** @ngInject */
class VideoHeroController {

    hero: any;
    onToggle: any;
    config: any;
    icon: string = 'keyboard_arrow_up';

    constructor() {
        this.config = {
            sources: [
                { src: this.hero }
            ],
            plugins: {
                controls: {
                    autoHide: true,
                    autoHideTime: 5000
                }
            }
        };
    }

    toggle() {
        this.onToggle();
        this.icon = this.icon === 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
    }
}

export let videoHeroComponent = {
    templateUrl: 'app/components/video-hero/video-hero.html',
    controller: VideoHeroController,
    bindings: {
        hero: '<',
        onToggle: '&'
    }
};
