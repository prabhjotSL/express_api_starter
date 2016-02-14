var Q = require('q');
var jwt = require('../lib/jwt');
var encryption = require('../lib/encryption');

var Auth = require('../lib/auth');

var User  	  = require('../models/user');
var Admin 	  = require('../models/admin');
var Executive = require('../models/executive');

module.exports.controller = function(app, api_prefix) {
	// 1. Have routes to Login each role and send them tokens if valid credentials and also send them their profiles.
	app.route(api_prefix + '/login/user')
    .all(function(req, res, next) {
        next();
    })
    .post(function(req, res) {
    	// No Authentication required.
    	var email = req.body.email;
    	var password = encryption.encrypt(req.body.password);

    	User.findOneQ({email: email, password: password})
    		.then(function(user) {
    			obj = user.toObject(); // swap for a plain javascript object instance
                obj.token = jwt.encode({id: obj._id, role: 'user'});
                delete obj["_id"];
                delete obj["password"];
                res.json(obj);
    		})
    		.catch(function(err) {
    			res.status(500).json({message: "Internal Server Error", error: err});
    		});
    });

    app.route(api_prefix + '/login/admin')
    .all(function(req, res, next) {
        next();
    })
    .post(function(req, res) {
    	// No Authentication required.
    	var email = req.body.email;
    	var password = encryption.encrypt(req.body.password);

    	Admin.findOneQ({email: email, password: password})
    		.then(function(admin) {
    			obj = admin.toObject(); // swap for a plain javascript object instance
                obj.token = jwt.encode({id: obj._id, role: 'admin'});
                delete obj["_id"];
                delete obj["password"];
                res.json(obj);
    		})
    		.catch(function(err) {
    			res.status(500).json({message: "Internal Server Error", error: err});
    		});
    });

    app.route(api_prefix + '/login/executive')
    .all(function(req, res, next) {
        next();
    })
    .post(function(req, res) {
    	// No Authentication required.
    	var email = req.body.email;
    	var password = encryption.encrypt(req.body.password);

    	Executive.findOneQ({email: email, password: password})
    		.then(function(executive) {
    			obj = executive.toObject(); // swap for a plain javascript object instance
                obj.token = jwt.encode({id: obj._id, role: 'executive'});
                delete obj["_id"];
                delete obj["password"];
                res.json(obj);
    		})
    		.catch(function(err) {
    			res.status(500).json({message: "Internal Server Error", error: err});
    		});
    });
}