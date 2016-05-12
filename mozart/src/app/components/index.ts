import { headerComponent } from './header/header.component';
import { sidenavComponent } from './sidenav/sidenav.component';
import { videoHeroComponent } from './video-hero/video-hero.component';

export function registerComponents() {
    angular.module('lilybook')
        .component('lbHeader', headerComponent)
        .component('lbSidenav', sidenavComponent)
        .component('lbVideoHero', videoHeroComponent);
}
