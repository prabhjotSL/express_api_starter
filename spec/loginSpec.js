var request = require("request");

var base_url = "http://localhost:3000"; // ToDo: Make this into a separate module and require the value. Will work with multiple spec files.

describe("Logins", function() {

	describe("GET /login/user", function() {
		it("returns status code 200", function(done) {
			var options = {
			  url: base_url + '/api/v1/login/user',
			  json: {
			  	email: 'calculus@gmail.com',
			  	password: 'qwerty'
			  },
			  headers: {
			    'api-key': 'ENTER_API_KEY_HERE'
			  }
			};
			request.post(options, function(error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
	    });

	    it("returns User Profile", function(done) {
	    	var options = {
			  url: base_url + '/api/v1/login/user',
			  json: {
			  	email: 'calculus@gmail.com',
			  	password: 'qwerty'
			  },
			  headers: {
			    'api-key': 'ENTER_API_KEY_HERE'
			  }
			};
			request.post(options, function(error, response, body) {
				// var body = JSON.parse(body);
				// console.log(body);
	    		expect(body['name']).toBe('Calculus');
	    		expect(body['age']).toBe(23);
	    		expect(body['email']).toBe('calculus@gmail.com');
	    		expect(body['token']).toNotBe(null);
	    		expect(body['token']).toNotBe('');
	    		done();
			});
	    });
	});

});
