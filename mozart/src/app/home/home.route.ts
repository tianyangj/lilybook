import { HomeController } from './home.controller';
import { HomeBookmarksController } from './home-bookmarks.controller';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider) {

    $stateProvider.state('app.home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: HomeController,
        controllerAs: '$ctrl',
        resolve: {
            account: ['userService', userService => {
                return userService.getAccount();
            }]
        }
    });

    $stateProvider.state('app.home.likes', {
        url: '/likes',
        template: 'home.likes'
    });

    $stateProvider.state('app.home.bookmarks', {
        url: '/bookmarks',
        templateUrl: 'app/home/home-bookmarks.html',
        controller: HomeBookmarksController,
        controllerAs: '$ctrl',
        resolve: {
            user: ['account', account => account]
        }
    });

    $stateProvider.state('app.home.repertoire', {
        url: '/repertoire',
        template: 'home.repertoire'
    });
}
