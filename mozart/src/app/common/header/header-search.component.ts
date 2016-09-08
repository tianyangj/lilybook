import { ComposerDataService } from '../data/composer.service';

const template = `
    <md-menu>
        <md-button class="md-icon-button" ng-click="$mdOpenMenu($event)">
            <md-icon class="material-icons">search</md-icon>
        </md-button>
        <md-menu-content style="padding:0;min-width:300px;">
            <md-autocomplete 
                md-autofocus="true" 
                md-selected-item="$ctrl.selectedItem" 
                md-search-text="$ctrl.searchText" 
                md-items="item in $ctrl.querySearch($ctrl.searchText)"
                md-item-text="item.fullname" 
                placeholder="Search">
                <md-item-template>
                    <span md-highlight-text="$ctrl.searchText" md-highlight-flags="^i">{{item.fullname}}</span>
                </md-item-template>
                <md-not-found>
                    No results matching "{{$ctrl.searchText}}" were found.
                </md-not-found>
            </md-autocomplete>
        </md-menu-content>
    </md-menu>
`;

class Controller {

    /** @ngInject */
    constructor(
        private composerDataService: ComposerDataService
    ) { }

    querySearch(text) {
        return this.composerDataService.getAll().$loaded().then(composers => {
            return composers.filter(composer => {
                return composer.fullname.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });
        });
    }
}

export const HeaderSearchComponent = {
    template: template,
    controller: Controller
};
