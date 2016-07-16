import { BookmarkDataService } from '../../common/data/bookmark.service';

class Controller {

    bookmark;
    bookmarked: boolean = false;
    composition;
    user;

    /** @ngInject */
    constructor(
        private bookmarkDataService: BookmarkDataService
    ) { }

    $onInit() {
        console.log(this.composition, this.user);
        if (this.user) {
            this.bookmark = this.bookmarkDataService.get(this.user.uid, this.composition.$id);
            this.bookmark.$watch(() => {
                this.bookmark.$loaded().then(data => {
                    this.bookmarked = data.$value;
                });
            });
        }
    }
}

export const CompositionFabBookmarkComponent: angular.IComponentOptions = {
    templateUrl: 'app/components/composition/composition-fab-bookmark.html',
    controller: Controller,
    bindings: {
        composition: '<',
        user: '<'
    }
};
