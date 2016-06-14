import { routerConfig } from './composition.route';

export function registerComposition() {
    angular.module('lilybook')
        .config(routerConfig);
}
