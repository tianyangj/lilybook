import { headerComponent } from './header/header.component';
import { profileHeaderComponent } from './header/profile-header.component';
import { sidenavComponent } from './sidenav/sidenav.component';
import { profileSidenavComponent } from './sidenav/profile-sidenav.component';
import { videoHeroComponent } from './video-hero/video-hero.component';
import { bookmarkComponent } from './bookmark/bookmark.component';

export function registerComponents() {
    angular.module('lilybook')
        .component('lbHeader', headerComponent)
        .component('lbProfileHeader', profileHeaderComponent)
        .component('lbSidenav', sidenavComponent)
        .component('lbProfileSidenav', profileSidenavComponent)
        .component('lbVideoHero', videoHeroComponent)
        .component('lbBookmark', bookmarkComponent);
}
