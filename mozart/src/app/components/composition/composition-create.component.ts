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
        this.data.composerId = 'beethoven';
        this.data.description = 'The Écossaise in E flat major, WoO 86, was one of Beethoven\'s last works for piano. Composed in 1825, the Écossaise was published in the same year in a collection of dances published by C. F. Müller, Ernst und Tändeley. Müller (not Beethoven) dedicated the piece to the Duchess Sophie of Austria.';
        this.data.form = 'dance';
        this.data.henle = undefined;
        this.data.hero = 'https://www.youtube.com/watch?v=QjU0JrNBnow';
        this.data.imslp = 'http://imslp.org/wiki/Ecossaise,_WoO_86_(Beethoven,_Ludwig_van)';
        this.data.key = 'e-flat-major';
        this.data.order = undefined;
        this.data.rcm = 'rcm-piano-1';
        this.data.sheet.images = ['https://storage.googleapis.com/project-6379245924955471702.appspot.com/images/sheet/E%CC%81cossaise_in_E_flat_major%2C_WoO_86-1.png'];
        this.data.sheet.measures = undefined;
        this.data.sheet.pages = undefined;
        this.data.sheet.pdf = undefined;
        this.data.thumbnail.url = 'https://storage.googleapis.com/project-6379245924955471702.appspot.com/thumbnails/beethoven-woo86.jpg';
        this.data.title = 'Écossaise in E flat Major, WoO 86';
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
