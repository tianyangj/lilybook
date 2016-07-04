class BookSummaryComponentController {

    vm;
    profile: any;
    bookmarks: any[];
    likes: any[];
    repertoire: any[];

    $onInit() {
        this.profile = this.vm.profile;
        this.bookmarks = this.vm.bookmarks;
        this.likes = this.vm.likes;
        this.repertoire = this.vm.repertoire;
    }
}

export const BookSummaryComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/book/book-summary.html',
    controller: BookSummaryComponentController,
    bindings: {
        vm: '<'
    }
};

