class BookCompositionComponentController {

    vm;
    composition;
    prevComposition;
    nextComposition;

    $onInit() {
        let list = this.vm.likes.concat(this.vm.bookmarks).concat(this.vm.repertoire);
        let index = list.findIndex(item => {
            return item.$id === this.composition.$id;
        });
        if (list.length > 1) {
            if (index === 0) {
                this.nextComposition = list[index + 1];
            } else if (index === list.length - 1) {
                this.prevComposition = list[index - 1];
            } else {
                this.nextComposition = list[index + 1];
                this.prevComposition = list[index - 1];
            }
        }
    }
}

export const BookCompositionComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/book/book-composition.html',
    controller: BookCompositionComponentController,
    bindings: {
        vm: '<',
        composition: '<'
    }
};

