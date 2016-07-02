class HomeComponentController {

    account;
    activeTab: number;
    recommendations: any[];

    /* @ngInject */
    constructor(
        private $state: angular.ui.IStateService
    ) {
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

export const HomeComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/home/home.html',
    controller: HomeComponentController,
    bindings: {
        account: '<'
    }
};
