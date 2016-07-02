import { LoginComponentView } from './login.component';
import { SignupComponentView } from './signup.component';
import { SplashComponentView } from './splash.component';

export const SplashModule = angular
    .module('lilybook.splash', [])
    .component('lbLoginView', LoginComponentView)
    .component('lbSignupView', SignupComponentView)
    .component('lbSplashView', SplashComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('splash', {
                url: '/',
                component: 'lbSplashView'
            });
        $stateProvider
            .state('login', {
                url: '/login',
                component: 'lbLoginView'
            });
        $stateProvider
            .state('signup', {
                url: '/signup',
                component: 'lbSignupView'
            });
    })
    .name;
