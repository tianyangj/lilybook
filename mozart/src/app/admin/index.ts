import { routerConfig } from './admin.route';

export function registerAdmin() {
    angular.module('lilybook')
        .config(routerConfig);
}
