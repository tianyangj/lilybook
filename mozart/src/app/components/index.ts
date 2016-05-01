import { headerComponent } from './header/header.component';
import { sidenavComponent } from './sidenav/sidenav.component';

export function registerComponents() {
    angular.module('lilybook')
        .component('lbHeader', headerComponent)
        .component('lbSidenav', sidenavComponent);
}
