export class CompositionSheetController {

    images: any[];
    itemTemplate: string;

    /* @ngInject */
    constructor(
        private composition: any
    ) {
        console.log('CompositionSheetController', this.composition);
        if (this.composition.sheet) {
            this.images = this.composition.sheet.images.map(image => {
                return { src: image };
            });
            this.itemTemplate = 'app/composition/composition-sheet-template.html'
        }

    }

}
