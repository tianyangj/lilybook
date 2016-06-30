import { SplashModule } from './splash';

export const ComponentsModule = angular
    .module('lilybook.components', [
        SplashModule
    ])
    .name;
