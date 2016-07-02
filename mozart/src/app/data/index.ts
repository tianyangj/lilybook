import { BookmarkService } from './bookmark.service';
import { CompositionService } from './composition.service';
import { DefinitionService } from './definition.service';
import { ProfileService } from './profile.service';
import { ResolverService } from './resolver.service';

export function registerDataServices() {
    angular.module('lilybook')
        .service('bookmarkService', BookmarkService)
        .service('compositionService', CompositionService)
        .service('definitionService', DefinitionService)
        .service('profileService', ProfileService)
        .service('resolverService', ResolverService);
}

