import { ProfileService } from './profile.service';
import { ResolverService } from './resolver.service';

export function registerDataServices() {
    angular.module('lilybook')
        .service('profileService', ProfileService)
        .service('resolverService', ResolverService);
}

