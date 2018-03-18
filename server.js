var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var http = require('http');
var passport = require('passport');
// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));
// [SH] Bring in the data model
var dbConfig =require('./routes/Model/dbconfig');
var auth=require("./routes/authentication");
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
app.use(bodyParser.urlencoded({ extended: false }));


app.set('superSecret', dbConfig.secret); // secret variable
app.use(bodyParser.json());
app.use(express.static(__dirname));



var imageAPI=require("./routes/imageAPI");
var profile=require("./routes/profile");

var server = http.createServer(app);
// get an instance of the router for api routes
var apiRoutes = express.Router();
// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});
// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token,"test", function(err, decoded) {
            if (err) {
                //  res.redirect('http://google.com');
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
})


app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'lib')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



/*------------------------------------------Authentication-------------------------------------------------------------------*/
app.post('/register',auth.registerUser);
app.post('/login',auth.LoginUser);


/*-----------------------------------------User Profile----------------------------------------------------------------------*/


app.get('/profile', profile.findById);
app.post('/profile', profile.saveUserProfile);
app.put('/profile/:id', profile.updateUserProfile);

/*-----------------------------------------Image Upload----------------------------------------------------------------------*/
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './userProfileImage')
    },
    filename: function (req, file, cb) {
         console.log('file request');
        var datetimestamp = Date.now();
        console.log('here');
        console.log(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        cb(null, file.originalname);

    }
});
var upload = multer({ storage: storage });

app.post('/uploads', upload.single('file'),imageAPI.uploadImage);
app.post('/deleteImageFile', imageAPI.deleteImage);




var server = http.createServer(app);
server.listen(process.env.PORT || 3000);
console.log("server running on port 3000");



