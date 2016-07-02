import { BookmarkDataService } from '../../common/data/bookmark.service';
import { CompositionDataService } from '../../common/data/composition.service';

class HomeBookmarksComponentController {

    bookmarks: any[] = [];
    user: any;

    /* @ngInject */
    constructor(
        private $firebaseAuth,
        private bookmarkDataService: BookmarkDataService,
        private compositionDataService: CompositionDataService
    ) {
        this.user = $firebaseAuth().$getAuth();
        this.bookmarkDataService.getAll(this.user.uid).$loaded().then(bookmarks => {
            bookmarks.forEach(bookmark => {
                compositionDataService.get(bookmark.$id).$loaded().then(composition => {
                    this.bookmarks.push({
                        composition: composition
                    });
                });
            });
        });
    }

}

export const HomeBookmarksComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/home/home-bookmarks.html',
    controller: HomeBookmarksComponentController
};
