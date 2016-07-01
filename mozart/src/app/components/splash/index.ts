import { LoginComponentView } from './login.component';
import { SignupComponentView } from './signup.component';
import { SplashComponentView } from './splash.component';

export const SplashModule = angular
    .module('lilybook.splash', [])
    .component('gfLoginView', LoginComponentView)
    .component('gfSignupView', SignupComponentView)
    .component('gfSplashView', SplashComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('splash', {
                url: '/',
                component: 'gfSplashView'
            });
        $stateProvider
            .state('login', {
                url: '/login',
                component: 'gfLoginView'
            });
        $stateProvider
            .state('signup', {
                url: '/signup',
                component: 'gfSignupView'
            });
    })
    .name;
