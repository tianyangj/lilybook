import { ComposerModule } from './composer';
import { HomeModule } from './home';
import { SplashModule } from './splash';

export const ComponentsModule = angular
    .module('lilybook.components', [
        ComposerModule,
        HomeModule,
        SplashModule
    ])
    .name;
