module.exports = function(Account) {

    Account.disableRemoteMethod("get", true);
    Account.disableRemoteMethod("create", true); // Removes (POST) /Accounts
    Account.disableRemoteMethod("upsert", true); // Removes (PUT) /Accounts
    Account.disableRemoteMethod("deleteById", true); // Removes (DELETE) /Accounts/:id
    Account.disableRemoteMethod("updateAll", true); // Removes (POST) /Accounts/update
    Account.disableRemoteMethod("updateAttributes", false); // Removes (PUT) /Accounts/:id
    Account.disableRemoteMethod('createChangeStream', true); // Removes (GET|POST) /Accounts/change-stream

    Account.disableRemoteMethod("find", true);
    Account.disableRemoteMethod("findOne", true);
    Account.disableRemoteMethod("count", true);
    Account.disableRemoteMethod("exists", true);

    Account.disableRemoteMethod('__count__accessTokens', false);
    Account.disableRemoteMethod('__create__accessTokens', false);
    Account.disableRemoteMethod('__delete__accessTokens', false);
    Account.disableRemoteMethod('__destroyById__accessTokens', false);
    Account.disableRemoteMethod('__findById__accessTokens', false);
    Account.disableRemoteMethod('__get__accessTokens', false);
    Account.disableRemoteMethod('__updateById__accessTokens', false);
};
