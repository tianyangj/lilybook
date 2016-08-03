import { HomeComponentView } from './home.component';
import { HomeCollectionsComponentView } from './home-collections.component';
import { HomeLikesComponentView } from './home-likes.component';
import { UserDataService } from '../../common/data/user.service';

export const HomeModule = angular
    .module('lilybook.home', [])
    .component('lbHomeView', HomeComponentView)
    .component('lbHomeCollectionsView', HomeCollectionsComponentView)
    .component('lbHomeLikesView', HomeLikesComponentView)
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
            .state('home.collections', {
                url: '/collections',
                component: 'lbHomeCollectionsView',
                resolve: {
                    user: account => account
                }
            });
        $stateProvider
            .state('home.likes', {
                url: '/likes',
                component: 'lbHomeLikesView',
                resolve: {
                    user: account => account
                }
            });
        $stateProvider
            .state('home.repertoire', {
                url: '/repertoire',
                component: 'lbHomeRepertoireView'
            });
    })
    .name;
