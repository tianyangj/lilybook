import { SplashComponentView } from './splash.component';

export const SplashModule = angular
    .module('lilybook.splash', [])
    .component('gfSplashView', SplashComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('splash', {
                url: '/',
                component: 'gfSplashView'
            });
    })
    .name;
