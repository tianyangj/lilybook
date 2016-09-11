import { BadgeAbrsmComponent } from './badges/abrsm.component';
import { BadgeHenleComponent } from './badges/henle.component';
import { BadgeKeyComponent } from './badges/key.component';
import { BadgeRcmComponent } from './badges/rcm.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header/header-menu.component';
import { HeaderSearchComponent } from './header/header-search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TagComponent } from './tag/tag.component';
import { ThumbnailCardComponent } from './thumbnail/thumbnail-card.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { VideoHeroComponent } from './video-hero/video-hero.component';

import { BookmarkDataService } from './data/bookmark.service';
import { ComposerDataService } from './data/composer.service';
import { CompositionDataService } from './data/composition.service';
import { DefinitionDataService } from './data/definition.service';
import { ProfileDataService } from './data/profile.service';
import { UserDataService } from './data/user.service';

import { CollectionModalService } from './modals/collection.service';
import { LoginModalService } from './modals/login.service';
import { SignupModalService } from './modals/signup.service';
import { ResolverService } from './resolvers/resolver.service';
import { AuthenticationService } from './services/authentication.service';

export const CommonModule = angular
    .module('lilybook.common', [
        'ngMessages'
    ])
    .component('lbBadgeAbrsm', BadgeAbrsmComponent)
    .component('lbBadgeHenle', BadgeHenleComponent)
    .component('lbBadgeKey', BadgeKeyComponent)
    .component('lbBadgeRcm', BadgeRcmComponent)
    .component('lbBookmark', BookmarkComponent)
    .component('lbHeader', HeaderComponent)
    .component('lbHeaderMenu', HeaderMenuComponent)
    .component('lbHeaderSearch', HeaderSearchComponent)
    .component('lbSidenav', SidenavComponent)
    .component('lbTag', TagComponent)
    .component('lbThumbnailCard', ThumbnailCardComponent)
    .component('lbThumbnail', ThumbnailComponent)
    .component('lbVideoHero', VideoHeroComponent)
    .service('bookmarkDataService', BookmarkDataService)
    .service('composerDataService', ComposerDataService)
    .service('compositionDataService', CompositionDataService)
    .service('definitionDataService', DefinitionDataService)
    .service('profileDataService', ProfileDataService)
    .service('userDataService', UserDataService)
    .service('collectionModalService', CollectionModalService)
    .service('loginModalService', LoginModalService)
    .service('signupModalService', SignupModalService)
    .service('resolverService', ResolverService)
    .service('authenticationService', AuthenticationService)
    .name;
