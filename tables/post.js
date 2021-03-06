var table = module.exports = require('azure-mobile-apps').table();

table.read(function (context) {
    context.query.where({ isDeleted: false });
    return context.execute();
});

table.insert(function (context) {
    return context.execute();
});

table.update(function (context) {
    return context.execute();
});

table.delete(function (context) {
    return context.execute();
});
