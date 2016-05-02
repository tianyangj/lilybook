export class HomeController {

    activeTab: number;
    recommendations: any[];

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService,
        private Composition: any
    ) {
        this.Composition.find({
            filter: { limit: 10 }
        }).$promise.then((compositions: any[]) => {
            this.recommendations = compositions;
        });

        switch (this.$state.current.name) {
            case 'home.profile':
                this.activeTab = 1;
                break;
            case 'home.likes':
                this.activeTab = 2;
                break;
            case 'home.bookmarks':
                this.activeTab = 3;
                break;
            case 'home.repertoire':
                this.activeTab = 4;
                break;
            default:
                this.activeTab = 0;
        }
    }

}
