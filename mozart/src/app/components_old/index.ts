import { profileHeaderComponent } from './header/profile-header.component';
import { profileSidenavComponent } from './sidenav/profile-sidenav.component';
import { videoHeroComponent } from './video-hero/video-hero.component';
import { bookmarkComponent } from './bookmark/bookmark.component';

export function registerComponents() {
    angular.module('lilybook')
        .component('lbProfileHeader', profileHeaderComponent)
        .component('lbProfileSidenav', profileSidenavComponent)
        .component('lbVideoHero', videoHeroComponent)
        .component('lbBookmark', bookmarkComponent);
}
