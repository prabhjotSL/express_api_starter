var crypto = require('crypto');

module.exports = {

	key: 'SuperSecretKey',

	encrypt: function(data) {
		var cipher = crypto.createCipher('aes256', this.key);
	    var crypted = cipher.update(data, 'utf-8', 'hex');
	    crypted += cipher.final('hex');

	    return crypted;
	},

	decrypt: function(data) {
		var decipher = crypto.createDecipher('aes256',this.key);
	    var decrypted = decipher.update(data, 'hex', 'utf-8');
	    decrypted += decipher.final('utf-8');

	    return decrypted;
	}

};