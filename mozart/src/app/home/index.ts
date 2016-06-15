import { routerConfig } from './home.route';

export function registerHome() {
    angular.module('lilybook')
        .config(routerConfig);
}
