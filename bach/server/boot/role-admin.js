module.exports = function (app) {

    const ADMIN_ID = 1014;

    var Account = app.models.Account;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    Account.findById(ADMIN_ID).then(function (user) {
        if (!user) {
            return Account.create({
                id: ADMIN_ID,
                email: 'tianyangj@gmail.com',
                password: 'qwer1234',
                admin: true
            })
        }
        return user;
    }).then(function (user) {
        console.log('User:', user);
        return Role.create({
            name: 'admin'
        }).then(function (role) {
            console.log('Created role:', role);
            return role.principals.create({
                principalType: RoleMapping.USER,
                principalId: user.id
            });
        }).then(function (principal) {
            console.log('Created principal:', principal);
        });
    }).catch(function (err) {
        console.log('Error:', err);
    });

};