import { SplashComponentView } from './splash.component';

export const SplashModule = angular
    .module('lilybook.splash', [])
    .component('lbSplashView', SplashComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('splash', {
                url: '/',
                component: 'lbSplashView'
            });
    })
    .name;
