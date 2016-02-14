0. Scripts:
   a. npm start : To run the server
   b. npm test  : To run the tests (before doing this, run npm start in a different tab). * will need to automate this.

1. To generate APIDOCs: apidoc -i controllers/ -o apidoc/

2. To run tests: (Try to automate this using Grunt/Gulp, whenever I start the server the tests are passed if --test flag is passed to it.)
	a. Make sure the server is running
	b. In a separate terminal window type: npm test

3. q: To enable promises. Read more here: https://www.npmjs.com/package/q

4. mongoose-q: To enable promises with mongoose using q. Read more here: https://www.npmjs.com/package/mongoose-q