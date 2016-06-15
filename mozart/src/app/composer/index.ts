import { routerConfig } from './composer.route';

export function registerComposer() {
    angular.module('lilybook')
        .config(routerConfig);
}
