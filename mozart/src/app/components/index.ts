import { ComposerModule } from './composer';
import { CompositionModule } from './composition';
import { HomeModule } from './home';
import { SplashModule } from './splash';

export const ComponentsModule = angular
    .module('lilybook.components', [
        ComposerModule,
        CompositionModule,
        HomeModule,
        SplashModule
    ])
    .name;
