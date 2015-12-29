var passport = require('passport'),
    User = require('../models/user');

module.exports.getAll = function (req, res) {
    User.find(function(err, users ) {
        if (err)
            res.send(err)
        res.json(users);
    });
}

module.exports.getById = function (req, res) {
    User.findOne({ _id: req.params.id }, function(err, user) {
        if (err) return console.error(err);
        res.json(user);
    });
}

module.exports.register = function(req,res){
    User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.status(500).json({err: err})
        }
        passport.authenticate('local')(req, res, function () {
            return res.status(200).json({status: 'Registration successful!'})
        });
    });
}

module.exports.login = function(req,res,next){
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) {
        return res.status(401).json({err: info})
      }
      req.logIn(user, function(err) {
        if (err) {
          return res.status(500).json({err: 'Could not log in user'})
        }
        res.status(200).json({status: 'Login successful!'})
      });
    })(req, res, next);
}

module.exports.logout = function(req,res){
    req.logout();
    res.status(200).json({status: 'Bye!'})
}