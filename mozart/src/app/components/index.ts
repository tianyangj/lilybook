import { headerComponent } from './header/header.component';
import { sidenavComponent } from './sidenav/sidenav.component';
import { composerHeroComponent } from './composer-hero/composer-hero.component';

export function registerComponents() {
    angular.module('lilybook')
        .component('lbHeader', headerComponent)
        .component('lbSidenav', sidenavComponent)
        .component('lbComposerHero', composerHeroComponent);
}
