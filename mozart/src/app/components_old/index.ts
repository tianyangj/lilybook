import { profileHeaderComponent } from './header/profile-header.component';
import { profileSidenavComponent } from './sidenav/profile-sidenav.component';

export function registerComponents() {
    angular.module('lilybook')
        .component('lbProfileHeader', profileHeaderComponent)
        .component('lbProfileSidenav', profileSidenavComponent);
}
