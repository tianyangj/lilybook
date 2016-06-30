import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserDataService } from './data/user.service';
import { LoginModalService } from './modals/login.service';
import { SignupModalService } from './modals/signup.service';

export const CommonModule = angular
    .module('app.common', [])
    .component('lbHeader', HeaderComponent)
    .component('lbSidenav', SidenavComponent)
    .service('userDataService', UserDataService)
    .service('loginModalService', LoginModalService)
    .service('signupModalService', SignupModalService)
    .name;
