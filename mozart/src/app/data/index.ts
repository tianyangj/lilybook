import { DefinitionService } from './definition.service';
import { ProfileService } from './profile.service';
import { ResolverService } from './resolver.service';

export function registerDataServices() {
    angular.module('lilybook')
        .service('definitionService', DefinitionService)
        .service('profileService', ProfileService)
        .service('resolverService', ResolverService);
}

