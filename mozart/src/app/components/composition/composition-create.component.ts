class Controller {

    data: any = {
        abrsm: undefined,
        catalogue: undefined,
        composerId: undefined,
        description: undefined,
        form: undefined,
        henle: undefined,
        hero: undefined,
        imslp: undefined,
        key: undefined,
        order: undefined,
        rcm: undefined,
        sheet: {
            images: [],
            measures: undefined,
            pages: undefined,
            pdf: undefined
        },
        thumbnail: {
            url: undefined
        },
        title: undefined,
        wikipedia: undefined
    };

    /* @ngInject */
    constructor(
        private $firebaseArray,
        private $firebaseObject
    ) { }

    $onInit() {
        this.data.abrsm = undefined;
        this.data.catelogue = undefined;
        this.data.composerId = undefined;
        this.data.description = undefined;
        this.data.form = undefined;
        this.data.henle = undefined;
        this.data.hero = undefined;
        this.data.imslp = undefined;
        this.data.key = undefined;
        this.data.order = undefined;
        this.data.rcm = undefined;
        this.data.sheet.images = [];
        this.data.sheet.measures = undefined;
        this.data.sheet.pages = undefined;
        this.data.sheet.pdf = undefined;
        this.data.thumbnail.url = undefined;
        this.data.title = undefined;
        this.data.wikipedia = undefined;

        this.data.abrsm = undefined;
        this.data.catelogue = undefined;
        this.data.composerId = 'mozart';
        this.data.description = 'This Allegro in B flat Major, K 3 by Wolfgang Amadeus Mozart is part of the Notebook for Nannerl Mozart [Notenbuch für Maria Anna (Nannerl) Mozart], 1759-1764. The original manuscript for this Allegro is in the hand of Leopold Mozart, and is dated March 4, 1762 (Wolfgang was then six years old).';
        this.data.form = undefined;
        this.data.henle = undefined;
        this.data.hero = 'https://www.youtube.com/watch?v=kHi6BPoBki0';
        this.data.imslp = undefined;
        this.data.key = 'b-flat-major';
        this.data.order = undefined;
        this.data.rcm = 'rcm-piano-1';
        this.data.sheet.images = ['https://storage.googleapis.com/project-6379245924955471702.appspot.com/sheets/mozart-allegro-in-b-flat-major-1.png'];
        this.data.sheet.measures = undefined;
        this.data.sheet.pages = undefined;
        this.data.sheet.pdf = undefined;
        this.data.thumbnail.url = 'https://storage.googleapis.com/project-6379245924955471702.appspot.com/thumbnails/mozart-allegro-in-b-flat-major.png';
        this.data.title = 'Allegro in B flat Major, K 3';
        this.data.wikipedia = undefined;
    }

    create() {
        // to remove all undefined nodes
        const composition = JSON.parse(JSON.stringify(this.data));
        const compositions = this.$firebaseArray(firebase.database().ref('/compositions'));
        compositions.$add(composition).then(compostion => {
            console.log('composition created', compostion);
        }).catch(error => {
            console.log('error', error);
        });
    }
}

export const CompositionCreateComponentView: angular.IComponentOptions = {
    template: `
        <div class="md-padding">
            <pre>{{$ctrl.data | json}}</pre>
            <hr>
            <md-button ng-click="$ctrl.create()">Create</md-button>
        </div>
    `,
    controller: Controller
};
