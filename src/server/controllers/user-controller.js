import passport from 'passport';
import User     from '../models/user';

export const getAll = (req, res) => {
    User.find((err, users ) => {
        if (err)
            res.send(err)
        res.json(users);
    });
}

export const getById = (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) return console.error(err);
        res.json(user);
    });
}

export const register = (req,res) => {
    User.register(new User({ username: req.body.username }), req.body.password, (err, account) => {
        if (err) {
            return res.status(500).json({err: err})
        }
        passport.authenticate('local')(req, res, function () {
            return res.status(200).json({status: 'Registration successful!'})
        });
    });
}

export const login = (req,res,next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err) }
      if (!user) {
        return res.status(401).json({err: info})
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({err: 'Could not log in user'})
        }
        res.status(200).json({status: 'Login successful!'})
      });
    })(req, res, next);
}

export const logout = (req,res) => {
    req.logout();
    res.status(200).json({status: 'Bye!'})
}