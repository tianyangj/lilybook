export class ProfileController {

    profile: any;
    bookmarks: any[];
    likes: any[];
    repertoire: any[];

    /* @ngInject */
    constructor(
        private vm: any
    ) {
        this.profile = vm.profile;
        this.bookmarks = vm.bookmarks;
        this.likes = vm.likes;
        this.repertoire = vm.repertoire;
    }

}
