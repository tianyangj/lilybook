class Controller {

    data: any = {
        abrsm: undefined,
        catalogue: undefined,
        composerId: undefined,
        description: undefined,
        form: undefined,
        henle: undefined,
        hero: {
            src: undefined
        },
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
        this.data.hero.src = undefined;
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
        this.data.composerId = 'hook';
        this.data.description = 'This lovely Allegretto in C Major, Op. 81, No. 4 by James Hook is part of the composer\'s New Guida di musica, Op. 81.';
        this.data.form = undefined;
        this.data.henle = undefined;
        this.data.hero.src = 'https://storage.googleapis.com/project-6379245924955471702.appspot.com/assets/hook-allegretto-in-c-major.webm';
        this.data.imslp = undefined;
        this.data.key = 'c-major';
        this.data.order = undefined;
        this.data.rcm = 'rcm-piano-1';
        this.data.sheet.images = ['https://storage.googleapis.com/project-6379245924955471702.appspot.com/assets/hook-allegretto-in-c-major-1.png'];
        this.data.sheet.measures = undefined;
        this.data.sheet.pages = undefined;
        this.data.sheet.pdf = undefined;
        this.data.thumbnail.url = 'https://storage.googleapis.com/project-6379245924955471702.appspot.com/assets/hook-allegretto-in-c-major.png';
        this.data.title = 'Allegretto in C Major, Op. 81, No. 4';
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
