var request = require("request");

var base_url = "http://localhost:3000"; // ToDo: Make this into a separate module and require the value. Will work with multiple spec files.

describe("Appointments", function() {

	describe("GET /Appointments", function() {
		it("returns status code 200", function(done) {
			request.get(base_url + '/api/v1/appointments', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
	    });

	    it("returns List of Appointments", function(done) {
	    	request.get(base_url + '/api/v1/appointments', function(error, response, body) {
	    		var body = JSON.parse(body);
	    		expect(body[0]['name']).toBe('Dr. Calculus');
	    		done();
	    	});
	    });
	});

});
