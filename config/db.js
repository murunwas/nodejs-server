const mongoose = require('mongoose');
const config = require("./config");

module.exports = function (app) {
    if (app.get('env') === "development") {
        mongoose.connect(config.dbUrl);
        console.log("mongo connecting to localhost");
    } else {
        mongoose.connect(config.dbRemote);
        console.log("mongo connecting to remote");
    }

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("db connected!!!!");
    });
}