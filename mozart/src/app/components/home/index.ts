import { HomeComponentView } from './home.component';
import { HomeCollectionsComponentView } from './home-collections.component';
import { HomeLikesComponentView } from './home-likes.component';
import { HomeMainComponentView } from './home-main.component';
import { UserDataService } from '../../common/data/user.service';

export const HomeModule = angular
    .module('lilybook.home', [
        'ksSwiper'
    ])
    .component('lbHomeView', HomeComponentView)
    .component('lbHomeCollectionsView', HomeCollectionsComponentView)
    .component('lbHomeLikesView', HomeLikesComponentView)
    .component('lbHomeMainView', HomeMainComponentView)
    .config(($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                component: 'lbHomeView',
                resolve: {
                    account: (userDataService: UserDataService) => userDataService.getAccount()
                },
                redirectTo: 'home.main'
            });
        $stateProvider
            .state('home.main', {
                component: 'lbHomeMainView',
                resolve: {
                    user: account => account
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
            .state('home.favorites', {
                url: '/favorites',
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
