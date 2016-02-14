var Auth = require('./auth');
var API_KEY = 'ENTER_API_KEY_HERE';

// the middleware function
module.exports = function() {
    
    return function(req, res, next) {
    	var token = req.headers['x-access-token'];
    	var key = req.headers['api-key'];
    	if(!token) {
    		console.log(key);
    		if(key == API_KEY) {
    			req.role = 'anonymous';
    		} else {
    			res.status(401).json({message: 'Authorization Failed.'});
    		}
    	} else {
	    	req.role = Auth.getRole(token);    		
    	}
    	switch(req.role) {
    		case 'user':
    			Auth.validateUser(token)
    				.then(function(user) {
    					req[req.role] = user;
    					req.authenticated = true;
    					next();
    				})
    				.catch(function(err){
    					res.status(err.status).json(err.message);
    				});
    			break;

    		case 'admin':
    			Auth.validateAdmin(token)
    				.then(function(admin) {
    					req[req.role] = admin;
    					req.authenticated = true;
    					next();
    				})
    				.catch(function(err){
    					res.status(err.status).json(err.message);
    				});
    			break;

    		case 'executive':
    			Auth.validateExecutive(token)
    				.then(function(executive) {
    					req[req.role] = executive;
    					req.authenticated = true;
    					next();
    				})
    				.catch(function(err){
    					res.status(err.status).json(err.message);
    				});
    			break;
    		case 'anonymous':
    			// when creating user, we won't have any token.
    			req.role = 'anonymous';
    			req.authenticated = true;
    			next();
    			// res.status(401).json({message: 'Authorization Failed'});
    	}
    }
    
};