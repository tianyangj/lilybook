import { badgeHenleComponent } from './badges/henle.component';
import { badgeKeyComponent } from './badges/key.component';
import { badgeRcmComponent } from './badges/rcm.component';
import { headerComponent } from './header/header.component';
import { profileHeaderComponent } from './header/profile-header.component';
import { sidenavComponent } from './sidenav/sidenav.component';
import { profileSidenavComponent } from './sidenav/profile-sidenav.component';
import { videoHeroComponent } from './video-hero/video-hero.component';
import { bookmarkComponent } from './bookmark/bookmark.component';

export function registerComponents() {
    angular.module('lilybook')
        .component('lbBadgeHenle', badgeHenleComponent)
        .component('lbBadgeKey', badgeKeyComponent)
        .component('lbBadgeRcm', badgeRcmComponent)
        .component('lbHeader', headerComponent)
        .component('lbProfileHeader', profileHeaderComponent)
        .component('lbSidenav', sidenavComponent)
        .component('lbProfileSidenav', profileSidenavComponent)
        .component('lbVideoHero', videoHeroComponent)
        .component('lbBookmark', bookmarkComponent);
}
