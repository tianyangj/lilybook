import { ComposerModule } from './composer';
import { SplashModule } from './splash';

export const ComponentsModule = angular
    .module('lilybook.components', [
        ComposerModule,
        SplashModule
    ])
    .name;
