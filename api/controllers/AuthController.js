
var jwt = require('jsonwebtoken'),
    moment = require('moment');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  authenticate: function(req, res) {

    User.findOne({ email: req.body.username }, function(err, user) {

      if (err) {
        sails.log.error(err);
        return res.send(500);
      }

      if (!user) {
        return res.send(401, { message: 'Authentication failed.' });
      }

      Crypto.comparePasswords(req.body.password, user.password, function(err, match) {

        if (err) {
          sails.log.error(err);
          return res.send(500);
        }

        if (!match) {
          return res.send(401, { message: 'Authentication failed.' });
        }

        var token = jwt.sign(user, sails.config.http.jwt.secret, {
          expiresIn: sails.config.http.jwt.tokenDuration
        });

        jwt.verify(token, sails.config.http.jwt.secret, function(err, decoded) {
          if (err) {
            return res.send(500);
          }
          return res.send(201, {
            token: token,
            expires: moment(decoded.exp * 1000).utc().format()
          });
        });
      });
    });

  },

};
