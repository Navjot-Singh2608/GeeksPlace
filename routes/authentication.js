var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var mongo = require('mongodb');
var JSONCreate=require("./JSONCreate");
var collectionName='user';
var fs = require('fs-extra');
var Server = mongo.Server,
    Db = mongo.Db;
//    BSON = mongo.BSONPure;
var BSON = require('bson').BSONPure;
var ObjectID = require("bson-objectid");
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('GraceProjectDB', server);

db.open(function(err, db) {
    if(!err) {
        //console.log("Connected to 'AppCreaterDB' database");
        db.collection(collectionName, {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'User' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});




module.exports.registerUser = function(req, res) {
    console.log("User Information before registering into database")
    console.log(req.body)
    if(!req.body.fullname ||!req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });

        return;
    }
    var user = new User();
    user.setFullName(req.body.fullname);
    user.setEmailAddress(req.body.email);
    user.setPassword(req.body.password);
    user.setCollection();

    var isUserExist=findUser(user,res)

};

var AddUser=function(user,res){
    var collection = db.collection(collectionName);
    collection.insert(user, function(err, item) {
        // res.send(item);
        console.log('Inserted Data: ' + item);
        res.status(200).json({'data':item});
        return true;
    });

};
var findUser=function(user,res){
    var collection = db.collection(collectionName);
    console.log(user.email);
    console.log("Checking for duplicate entry");

    collection.findOne({'email':user.email}, function(err, item) {
        // res.send(item);
        if(item==null){
            console.log("Adding user into database  Email:" +user.getEmailAddress())
            AddUser(user,res)
        }else{
            console.log("duplicate Email address :" +user.getEmailAddress())
            res.status(409)
            res.json({"error":"Duplicate email address"})
            return;
        }
        //     return true;
    });

};

module.exports.LoginUser = function(req, res) {
    console.log("login user: " );
    console.log(req.body);

    if(!req.body.email || !req.body.password) {
        res.status(400)
        res.json({ success: false, message: 'Email id or Password are blank' });

        return;
    }
    var collection = db.collection(collectionName);

    console.log("Checking for entry into database User Name and Password ");


    collection.findOne({'email':req.body.email}, function(err, item) {
        // res.send(item);
        console.log('Retrieving item: ' );
        console.log('================================================================================================================' );
        console.log(item );
        console.log('================================================================================================================' );
        console.log(err);
        if(!item){
            console.log(" Email doesn't exist :")
            res.status(401)
            res.json({ success: false, message: 'Authentication failed. User not found.' });
            return res;
        }else{
            var dbUser=new User();
            dbUser.buildUser(item)
            console.log("User = "+dbUser );

            if(dbUser.validPassword(req.body.password)){
                // if user is found and password is right
                // create a token


//                token = dbUser.generateJwt();
                dbUser.generateJwt();
                res.status(200);
                res.json({
                    "userData":dbUser
                });
                return
            }else{
                res.status(401);
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });

            }

        }
        //     return true;
    });

};
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
    var user = new User();
    user.name = "admin";
    user.email = "admin@gmail.com";
    user.setPassword("admin");

    db.collection(collectionName, function(err, collection) {
        console.log("Admin inserted");
        collection.insert(user, {safe:true}, function(err, result) {});
    });

};
exports.isAuthenticated = passport.authenticate('basic', { session : false });