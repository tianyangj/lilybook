import { CompositionDataService } from '../common/data/composition.service';

export class ProfileService {

    private userPublicRef;
    private userVanityRef;

    /* @ngInject */
    constructor(
        private $q: angular.IQService,
        private $log: angular.ILogService,
        private $firebaseObject,
        private firebase,
        private compositionService: CompositionDataService
    ) {
        this.userPublicRef = firebase.database().ref('/user-public');
        this.userVanityRef = firebase.database().ref('/user-vanity');
    }

    get(vanity: string) {
        this.$log.debug('[ProfileService.get]: start', performance.now());
        let result: any = {};
        return this.$firebaseObject(this.userVanityRef.child(vanity)).$loaded().then(response => {
            this.$log.debug('[ProfileService.get]: userVanityRef loaded', performance.now());
            let uid = response.$value || vanity;
            return this.$firebaseObject(this.userPublicRef.child(uid)).$loaded();
        }).then(response => {
            this.$log.debug('[ProfileService.get]: userPublicRef loaded', performance.now());
            result.profile = response.profile;
            let query: any = {};
            if (response.bookmarks) {
                Object.keys(response.bookmarks).forEach((compositionId) => {
                    query['bookmarks|' + compositionId] = this.compositionService.get(compositionId).$loaded();
                });
            }
            if (response.likes) {
                Object.keys(response.likes).forEach((compositionId) => {
                    query['likes|' + compositionId] = this.compositionService.get(compositionId).$loaded();
                });
            }
            if (response.repertoire) {
                Object.keys(response.repertoire).forEach((compositionId) => {
                    query['repertoire|' + compositionId] = this.compositionService.get(compositionId).$loaded();
                });
            }
            this.$log.debug('[ProfileService.get]: compositions query ready', performance.now());
            return this.$q.all<any>(query);
        }).then(response => {
            this.$log.debug('[ProfileService.get]: all compositionsRef loaded', performance.now());
            Object.keys(response).forEach((key) => {
                let section = key.substring(0, key.indexOf('|'));
                result[section] = result[section] || [];
                result[section].push(response[key]);
            });
            this.$log.debug('[ProfileService.get]: end', performance.now());
            return result;
        });
    }
}
