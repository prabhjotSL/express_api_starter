var Q 			 = require('q'); // https://www.npmjs.com/package/q
var mongoose 	 = require('mongoose-q')(require('mongoose')); // https://www.npmjs.com/package/mongoose-q
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    email: {type: String, index: {unique: true}, required: true },
    password: {type: String, required: true}, // http://stackoverflow.com/questions/18791616/removing-attribute-from-javascript-object-returned-by-mongooses-findoneandupd
    name: {type: String, required: true},
    age: Number
});

module.exports = mongoose.model('User', UserSchema);