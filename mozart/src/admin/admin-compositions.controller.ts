export class AdminCompositionsController {

    compositions: any[];

    /* @ngInject */
    constructor(
        private $timeout: angular.ITimeoutService,
        private firebase: any
    ) {
        firebase.database().ref('/compositions').once('value').then(snapshot => {
            let compositions = snapshot.val();
            let tt = Object.keys(compositions).map(key => {
                compositions[key].id = key;
                return compositions[key];
            });
            let ss = tt.reduce((prev, curr) => {
                if (!prev[curr.composerId]) {
                    prev[curr.composerId] = {};
                }
                prev[curr.composerId][curr.id] = true;
                return prev;
            }, {});
            Object.keys(ss).forEach(key => {
                console.log(key, ss[key]);
                // firebase.database().ref('/composers/' + key + '/compositions').set(ss[key]);
            });
            console.log(compositions, tt, ss);
        });
    }

}
