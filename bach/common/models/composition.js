'use strict';

module.exports = function (Composition) {
    Composition.disableRemoteMethod('createChangeStream', true);
    Composition.disableRemoteMethod("updateAll", true);

    Composition.detail = function (id, cb) {

        let Composer = Composition.app.models.Composer;
        let Key = Composition.app.models.Key;
        let Form = Composition.app.models.Form;
        let Abrsm = Composition.app.models.ABRSM;
        let Henle = Composition.app.models.Henle;
        let Rcm = Composition.app.models.RCM;

        Composition.findById(id).then(composition => {
            let promises = [];
            if (composition.composerId) {
                promises.push(Composer.findById(composition.composerId).then(composer => {
                    return { composer: composer };
                }));
            }
            if (composition.key) {
                promises.push(Key.findById(composition.key).then((key) => {
                    return { key: key };
                }));
            }
            if (composition.form) {
                promises.push(Form.findById(composition.form).then((form) => {
                    return { form: form };
                }));
            }
            if (composition.abrsm) {
                promises.push(Abrsm.findById(composition.abrsm).then((abrsm) => {
                    return { abrsm: abrsm };
                }));
            }
            if (composition.henle) {
                promises.push(Henle.findById(composition.henle).then((henle) => {
                    return { henle: henle };
                }));
            }
            if (composition.rcm) {
                promises.push(Rcm.findById(composition.rcm).then((rcm) => {
                    return { rcm: rcm };
                }));
            }
            Promise.all(promises).then((response) => {
                cb(null, response.reduce((prev, curr) => {
                    return Object.assign(prev, curr);
                }, { composition: composition }));
            });
        });
    };

    Composition.remoteMethod('detail', {
        accepts: { arg: 'id', type: 'string' },
        returns: { root: true, type: 'object' },
        http: { path: '/detail', verb: 'get' }
    });
};
