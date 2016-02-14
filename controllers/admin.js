var Q = require('q');
var jwt = require('../lib/jwt');
var encryption = require('../lib/encryption');
var Admin = require('../models/admin');
var Auth = require('../lib/auth');

module.exports.controller = function(app, api_prefix) {

    /** This will be inherited.
     * @apiDefine AdminNotFound
     *
     * @apiError AdminNotFound The resource requested is not available.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "AdminsNotFound"
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

    app.route(api_prefix + '/admins')
    .all(function(req, res, next) {
        next();
    })
    .get(function(req, res) {
        /**
         * @api {get} /admins Request All Admins
         * @apiName GetAllAdmins
         * @apiGroup Admins
         *
         * @apiSuccess {String} _id Id of the Admin.
         * @apiSuccess {String} email Email of the Admin.
         * @apiSuccess {String} name Name of the Admin.
         * @apiSuccess {Number} age Age of the Admin.
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
        if (req.role == 'admin' && req.authenticated == true) {
            Admin.findQ()
                .then(function(admins) {
                    res.json(admins);
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
         * @api {post} /admins Create New Admin
         * @apiName CreateNewAdmin
         * @apiGroup Admins
         *
         * @apiParam {String} email Email of the Admin.
         * @apiParam {String} password Password of the Admin.
         * @apiParam {String} name Name of the Admin.
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
         * @apiSuccess {String} _id Id of the Admin.
         * @apiSuccess {String} email Email of the Admin.
         * @apiSuccess {String} name Name of the Admin.
         * @apiSuccess {Number} age Age of the Admin.
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
        if (req.role == 'admin' && req.authenticated == true) {
            var admin = new Admin();
            admin.email = req.body.email;
            admin.password = encryption.encrypt(req.body.password);
            admin.name = req.body.name;

            admin.saveQ()
                .then(function(obj) {
                    obj = obj.toObject(); // swap for a plain javascript object instance
                    obj.token = jwt.encode({id: obj._id, role: 'admin'});
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

    app.route(api_prefix + '/admins/:id')
    .all(function(req, res, next) {
        next();
    })
    .get(function(req, res) {
        /**
         * @api {get} /admin/:id Request One Admin Information
         * @apiName GetOneAdmin
         * @apiGroup Admins
         *
         * @apiParam {String} id Admins unique ID.
         *
         * @apiSuccess {String} _id Id of the new Admin Created.
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
         * @apiUse AdminNotFound
         * @apiUse InternalServerError
         */
        if (req.role == 'admin' && req.authenticated) {
            Admin.findByIdQ(req.params.id)
                .then(function(admin) {
                    res.json(admin);
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
         * @api {put} /admin/:id Update Admin Information
         * @apiName UpdateOneAdmin
         * @apiGroup Admins
         *
         * @apiParam {String} id Admins unique ID, to be given as part of url.
         * @apiParam {String} name Admin name value to be updated, to be given as part of JSON object.
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
         *       "message" : "Admin updated"
         *     }
         *
         * @apiUse AdminNotFound
         * @apiUse InternalServerError
         */
        if(req.role=='admin' && req.authenticated) {
            Admin.findByIdQ(req.params.id)
                .then(function(admin) {
                    console.log(admin);
                    admin.name = req.body.name;

                    return admin.saveQ();
                })
                .then(function() {
                    res.json({message: 'Admin updated'});
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
        Admin.findById(req.params.id, function(err, admin) {

            if (err)
                res.send(err);

            admin.name = req.body.name;

            // save the bear
            admin.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Admin updated!' });
            });

        });
        */
    })
    .delete(function(req, res) {
        /**
         * @api {delete} /admin/:id Delete Admin Information
         * @apiName DeleteOneAdmin
         * @apiGroup Admins
         *
         * @apiParam {String} id Admins unique ID.
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
         * @apiUse AdminNotFound
         * @apiUse InternalServerError
         */
        if(req.role == 'admin' && req.authenticated) {
            Admin.removeQ({ _id: req.params.id })
                .then(function(admin) {
                    res.json({ message: 'Successfully deleted', object: admin });
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

