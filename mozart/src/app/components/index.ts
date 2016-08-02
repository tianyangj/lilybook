import { BookModule } from './book';
import { BrowseModule } from './browse';
import { ComposerModule } from './composer';
import { CompositionModule } from './composition';
import { HomeModule } from './home';
import { SplashModule } from './splash';

export const ComponentsModule = angular
    .module('lilybook.components', [
        BookModule,
        BrowseModule,
        ComposerModule,
        CompositionModule,
        HomeModule,
        SplashModule
    ])
    .name;
