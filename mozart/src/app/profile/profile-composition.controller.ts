export class ProfileCompositionController {

    prevComposition;
    nextComposition;

    /* @ngInject */
    constructor(
        private vm: any,
        private composition: any
    ) {
        let list = vm.likes.concat(vm.bookmarks).concat(vm.repertoire);
        let index = list.findIndex(item => {
            return item.$id === composition.$id;
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
