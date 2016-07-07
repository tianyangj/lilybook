import { ComposerDataService } from '../data/composer.service';

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
    templateUrl: 'app/common/header/header-search.html',
    controller: Controller
};
