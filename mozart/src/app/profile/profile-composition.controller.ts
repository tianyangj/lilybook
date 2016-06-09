export class ProfileCompositionController {

    prevCompositionId;
    nextCompositionId;

    /* @ngInject */
    constructor(
        private vm: any,
        private composition: any
    ) {
        let list = vm.likes.map(item => item.$id)
            .concat(vm.bookmarks.map(item => item.$id))
            .concat(vm.repertoire.map(item => item.$id));
        let index = list.indexOf(composition.$id);
        if (list.length > 1) {
            if (index === 0) {
                this.nextCompositionId = list[index + 1];
            } else if (index === list.length - 1) {
                this.prevCompositionId = list[index - 1];
            } else {
                this.nextCompositionId = list[index + 1];
                this.prevCompositionId = list[index - 1];
            }
        }
    }

}
