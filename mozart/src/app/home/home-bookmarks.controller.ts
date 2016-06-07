import { BookmarkService } from '../data/bookmark.service';
import { CompositionService } from '../data/composition.service';

export class HomeBookmarksController {

    bookmarks: any[];
    user: any;

    /* @ngInject */
    constructor(
        private firebase: any,
        private $firebaseAuth,
        private bookmarkService: BookmarkService,
        private compositionService: CompositionService
    ) {
        this.user = $firebaseAuth().$getAuth();
        this.bookmarkService.getAll(this.user.uid).$loaded().then(compositions => {
            console.log(compositions);
            /*compositions.forEach(composition => {
                console.log(composition.$id)
                compositionService.get(composition.$id).then(composition => {
                    this.bookmarks.push(composition)
                })
            })*/
        });
    }

}
