
var bcrypt = require('bcrypt');

module.exports = {

  hashPassword: function (password, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) {
          return cb(err);
        }
        cb(null, hash);
      });
    });
  },

  comparePasswords: function(plain, hash, cb) {
    bcrypt.compare(plain, hash, function(err, res) {
      cb(err, res);
    });
  }

};
