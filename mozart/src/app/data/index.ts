import { ComposerService } from './composer.service';
import { CompositionService } from './composition.service';
import { DefinitionService } from './definition.service';

export function registerDataServices() {
    angular.module('lilybook')
        .service('composerService', ComposerService)
        .service('compositionService', CompositionService)
        .service('definitionService', DefinitionService);
}

