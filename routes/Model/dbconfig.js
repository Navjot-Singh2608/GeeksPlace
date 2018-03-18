var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db;
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('AppCreaterDB', server);
var dbOpenConnection;
db.open(function(err, database) {
    if(!err) {
        console.log("Connected to 'AppCreaterDB' database");
        // dbOpenConnection=database;
    }

});
module.exports.getDatabaseConnection = function() {
    return db;
};
module.exports = {

    'secret': 'iHaveSecrets'
    // 'database': 'mongodb://noder:noderauth&54;proximus.modulusmongo.net:27017/so9pojyN'

};
// BRING IN YOUR SCHEMAS & MODELS
require('./users');
