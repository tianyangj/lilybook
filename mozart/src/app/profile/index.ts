import { routerConfig } from './profile.route';

export function registerProfile() {
    angular.module('lilybook')
        .config(routerConfig);
}
