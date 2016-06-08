import { CompositionService } from './composition.service';

export class ProfileService {

    private usersRef;
    private userPublicRef;

    /* @ngInject */
    constructor(
        private $q: angular.IQService,
        private $log: angular.ILogService,
        private $firebaseObject,
        private firebase,
        private compositionService: CompositionService
    ) {
        this.usersRef = firebase.database().ref('/users');
        this.userPublicRef = firebase.database().ref('/user-public');
    }

    get(uid: string) {
        this.$log.debug('[ProfileService.get]: start', performance.now());
        let result: any = {};
        return this.$q.all<any>({
            profile: this.$firebaseObject(this.usersRef.child(uid)).$loaded(),
            compositions: this.$firebaseObject(this.userPublicRef.child(uid)).$loaded()
        }).then(response => {
            this.$log.debug('[ProfileService.get]: usersRef and userPublicRef loaded', performance.now());
            result.profile = response.profile;
            let query: any = {};
            if (response.compositions) {
                if (response.compositions.bookmarks) {
                    Object.keys(response.compositions.bookmarks).forEach((compositionId) => {
                        query['bookmarks|' + compositionId] = this.compositionService.get(compositionId).$loaded();
                    });
                }
                if (response.compositions.likes) {
                    Object.keys(response.compositions.likes).forEach((compositionId) => {
                        query['likes|' + compositionId] = this.compositionService.get(compositionId).$loaded();
                    });
                }
                if (response.compositions.repertoire) {
                    Object.keys(response.compositions.repertoire).forEach((compositionId) => {
                        query['repertoire|' + compositionId] = this.compositionService.get(compositionId).$loaded();
                    });
                }
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
