import { routerConfig } from './splash.route';

export function registerSplash() {
    angular.module('lilybook')
        .config(routerConfig);
}
