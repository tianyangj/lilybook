import { ComposerService } from './composer.service';

export function registerDataServices() {
    angular.module('lilybook')
        .service('composerService', ComposerService);
}

