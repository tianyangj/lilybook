import { BookmarkService } from '../data/bookmark.service';
import { CompositionService } from '../data/composition.service';

export class HomeBookmarksController {

    bookmarks: any[] = [];
    user: any;

    /* @ngInject */
    constructor(
        private $firebaseAuth,
        private bookmarkService: BookmarkService,
        private compositionService: CompositionService
    ) {
        this.user = $firebaseAuth().$getAuth();
        this.bookmarkService.getAll(this.user.uid).$loaded().then(bookmarks => {
            bookmarks.forEach(bookmark => {
                compositionService.get(bookmark.$id).then(composition => {
                    this.bookmarks.push({
                        composition: composition
                    });
                });
            });
        });
    }

}
