var table = module.exports = require('azure-mobile-apps').table();

// Defines the list of columns
table.columns = {
    "deleted": "boolean"
};

table.read(function (context) {
    context.query.where({ deleted: true });
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
