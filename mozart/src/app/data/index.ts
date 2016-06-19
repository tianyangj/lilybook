import { BookmarkService } from './bookmark.service';
import { ComposerService } from './composer.service';
import { CompositionService } from './composition.service';
import { DefinitionService } from './definition.service';
import { ProfileService } from './profile.service';
import { ResolverService } from './resolver.service';
import { UserService } from './user.service';

export function registerDataServices() {
    angular.module('lilybook')
        .service('bookmarkService', BookmarkService)
        .service('composerService', ComposerService)
        .service('compositionService', CompositionService)
        .service('definitionService', DefinitionService)
        .service('profileService', ProfileService)
        .service('resolverService', ResolverService)
        .service('userService', UserService);
}

