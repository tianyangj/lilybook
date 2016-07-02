import { HomeComponentView } from './home.component';
import { HomeBookmarksComponentView } from './home-bookmarks.component';
import { UserDataService } from '../../common/data/user.service';

export const HomeModule = angular
    .module('lilybook.home', [])
    .component('lbHomeView', HomeComponentView)
    .component('lbHomeBookmarksView', HomeBookmarksComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                component: 'lbHomeView',
                resolve: {
                    account: (userDataService: UserDataService) => userDataService.getAccount()
                }
            });
        $stateProvider
            .state('home.bookmarks', {
                url: '/bookmarks',
                component: 'lbHomeBookmarksView',
                resolve: {
                    user: account => account
                }
            });
        $stateProvider
            .state('home.likes', {
                url: '/likes',
                component: 'lbHomeLikesView'
            });
        $stateProvider
            .state('home.repertoire', {
                url: '/repertoire',
                component: 'lbHomeRepertoireView'
            });
    })
    .name;
