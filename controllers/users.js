var Q = require('q');
var jwt = require('../lib/jwt');
var encryption = require('../lib/encryption');
var User = require('../models/user');
var Auth = require('../lib/auth');

module.exports.controller = function(app, api_prefix) {

    /** This will be inherited.
     * @apiDefine UserNotFound
     *
     * @apiError UserNotFound The resource requested is not available.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "UsersNotFound"
     *     }
     */

    /** This will be inherited.
     * @apiDefine InternalServerError 5xx
     * 
     * @apiError InternalServerError Something Failed Internally, Please check the error object.
     *
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 500 Internal Server Error
     *      {
     *       "message": "Internal Server Error",
     *       "error"  : {}
     *     }
     */

    app.route(api_prefix + '/users')
    .all(function(req, res, next) {
        next();
    })
    .get(function(req, res) {
        /**
         * @api {get} /users Request All Users
         * @apiName GetAllUsers
         * @apiGroup Users
         *
         * @apiSuccess {String} _id Id of the User.
         * @apiSuccess {String} email Email of the User.
         * @apiSuccess {String} name Name of the User.
         * @apiSuccess {Number} age Age of the User.
         * @apiSuccess {String} __v Version of the Document (Auto Generated).
         *
         * @apiSuccessExample {Object[]} Success-Response:
         *     HTTP/1.1 200 OK
         *     [{
         *       "_id"  : "56b86af87365ac25146b2bc5",
         *       "email": "calculus@gmail.com",
         *       "name" : "Dr. Calculus",
         *       "age"  : 33,
         *       "__v"  : 0
         *     }]
         *
         * @apiUse InternalServerError
         */
        console.log("CAME HREE");
        if ((req.role == 'admin' || req.role == 'executive') && req.authenticated == true) {
            User.findQ()
                .then(function(users) {
                    res.json(users);
                })
                .catch(function(err) {
                    console.log("Error:",err);
                    res.status(500).json({message: "Internal Server Error", error: err});
                });
        } else {
            res.status(401).json({message: 'You are not authorized to access this resource.'});
        }
    }) 
    .post(function(req, res) {
        /**
         * @api {post} /users Create New User
         * @apiName CreateNewUser
         * @apiGroup Users
         *
         * @apiParam {String} email Email of the User.
         * @apiParam {String} password Password of the User.
         * @apiParam {String} name Name of the User.
         * @apiParam {Number} age Name of the Age.
         *
         * @apiParamExample {json} Request-Example:
         *     {
         *       "email"   : "tangent@gmail.com",
         *       "password": "qwerty",
         *       "name"    : "Dr. Tangent",
         *       "age"     : "32"
         *     }
         *
         * @apiSuccess {String} _id Id of the User.
         * @apiSuccess {String} email Email of the User.
         * @apiSuccess {String} name Name of the User.
         * @apiSuccess {Number} age Age of the User.
         * @apiSuccess {String} __v Version of the Document (Auto Generated).
         *
         * @apiSuccessExample {Object[]} Success-Response:
         *     HTTP/1.1 200 OK
         *     [{
         *       "_id"  : "56b86af87365ac25146b2bc5",
         *       "email": "tangent@gmail.com",
         *       "name" : "Dr. Tangent",
         *       "age"  : 32,
         *       "__v"  : 0
         *     }]
         *
         * @apiUse InternalServerError
         */
        if ((req.role == 'admin' || req.role == 'anonymous') && req.authenticated == true) {
            var user = new User();
            user.email = req.body.email;
            user.password = encryption.encrypt(req.body.password);
            user.name = req.body.name;
            user.age = req.body.age;

            user.saveQ()
                .then(function(obj) {
                    obj = obj.toObject(); // swap for a plain javascript object instance
                    obj.token = jwt.encode({id: obj._id, role: 'user'});
                    delete obj["_id"];
                    delete obj["password"];
                    res.json(obj);
                })
                .catch(function(err) {
                    if(err.code == 11000) {
                        err = 'Email address already exists';
                    }
                    res.status(500).json({message: "Internal Server Error", error: err});
                });
        } else {
            res.status(401).json({message: 'You are not authorized to access this resource.'});
        }
    });

    app.route(api_prefix + '/users/:id')
    .all(function(req, res, next) {
        next();
    })
    .get(function(req, res) {
        /**
         * @api {get} /user/:id Request One User Information
         * @apiName GetOneUser
         * @apiGroup Users
         *
         * @apiParam {String} id Users unique ID.
         *
         * @apiSuccess {String} _id Id of the new User Created.
         * @apiSuccess {String} name Name of the Doctor.
         * @apiSuccess {String} __v Version of the Document (Auto Generated).
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "_id" : "56b86af87365ac25146b2bc5",
         *       "name": "Dr. Calculus",
         *       "__v" : 0
         *     }
         *
         * @apiUse UserNotFound
         * @apiUse InternalServerError
         */
        if ((req.role == 'admin' || req.role == 'coach' || req.role == 'executive' || req.role == 'user') && req.authenticated) {
            User.findByIdQ(req.params.id)
                .then(function(user) {
                    res.json(user);
                })
                .catch(function(err) {
                    console.log("came here err", err);
                    res.send(err);
                });
        } else {
            res.status(401).json({message: 'You are not authorized to access this resource.'});
        }
    })
    .put(function(req, res) {
        /**
         * @api {put} /user/:id Update User Information
         * @apiName UpdateOneUser
         * @apiGroup Users
         *
         * @apiParam {String} id Users unique ID, to be given as part of url.
         * @apiParam {String} name User name value to be updated, to be given as part of JSON object.
         *
         * @apiParamExample {json} Request-Example:
         *     {
         *       "name": "Dr. Tangent"
         *     }
         *
         * @apiSuccess {String} message Success Message
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "message" : "User updated"
         *     }
         *
         * @apiUse UserNotFound
         * @apiUse InternalServerError
         */
        if((req.role=='admin' || req.role == 'user') && req.authenticated) {
            User.findByIdQ(req.params.id)
                .then(function(user) {
                    console.log(user);
                    user.name = req.body.name;

                    return user.saveQ();
                })
                .then(function() {
                    res.json({message: 'User updated'});
                })
                .catch(function(err) {
                    console.log("came here err", err);
                    res.json(err);
                });
        } else {
            res.status(401).json({message: 'You are not authorized to access this resource.'});
        }
        
        /*
        // Without Promises. To be REMOVED after reviewing.
        User.findById(req.params.id, function(err, user) {

            if (err)
                res.send(err);

            user.name = req.body.name;

            // save the bear
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
        */
    })
    .delete(function(req, res) {
        /**
         * @api {delete} /user/:id Delete User Information
         * @apiName DeleteOneUser
         * @apiGroup Users
         *
         * @apiParam {String} id Users unique ID.
         *
         *
         * @apiSuccess {String} message Success Message
         * @apiSuccess {Object} object  Deleted Object
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "message" : "Successfully deleted",
         *       "object"  : {
         *          "_id": "56b86af87365ac25146b2bc5",
         *          "name": "Dr. Calculus",
         *          "__v": 0
         *       }
         *     }
         *
         * @apiUse UserNotFound
         * @apiUse InternalServerError
         */
        if((req.role == 'admin' || req.role == 'user') && req.authenticated) {
            User.removeQ({ _id: req.params.id })
                .then(function(user) {
                    res.json({ message: 'Successfully deleted', object: user });
                })
                .catch(function(err) {
                    console.log("came here err", err);
                    res.send(err);
                });
        } else {
            res.status(401).json({message: 'You are not authorized to access this resource.'});
        }
    });

};

