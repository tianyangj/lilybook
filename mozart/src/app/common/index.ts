import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ComposerDataService } from './data/composer.service';
import { UserDataService } from './data/user.service';
import { LoginModalService } from './modals/login.service';
import { SignupModalService } from './modals/signup.service';

export const CommonModule = angular
    .module('lilybook.common', [])
    .component('lbHeader', HeaderComponent)
    .component('lbSidenav', SidenavComponent)
    .service('composerDataService', ComposerDataService)
    .service('userDataService', UserDataService)
    .service('loginModalService', LoginModalService)
    .service('signupModalService', SignupModalService)
    .name;
