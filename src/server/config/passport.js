import passport                       from 'passport';
import { Strategy as localStrategy }  from 'passport-local';
//import { Strategy as facebookStrategy } from 'passport-facebook';

import User from '../models/user';
import auth from './auth';

// serialize and deserialize
passport.serializeUser((user, done) => {
  	console.log('serializeUser: ' + user._id);
  	done(null, user._id);
});
passport.deserializeUser((id, done) => {
  	User.findById(id, function(err, user){
    	console.log(user);
      	if(!err) done(null, user);
      	else done(err, null);
    });
});

//local
passport.use(new localStrategy(User.authenticate()));

//facebook
// passport.use(new facebookStrategy({
//     clientID: auth.facebookAuth.clientID,
//     clientSecret: auth.facebookAuth.clientSecret,
//     callbackURL: auth.facebookAuth.callbackURL
//   	},
//   	(accessToken, refreshToken, profile, done) => {
// 	    User.findOne({ oauthID: profile.id }, (err, user) => {
// 	      	if(err) {
// 	        	console.log(err);  // handle errors!
// 	      	}
// 	      	if (!err && user !== null) {
// 	      		// console.log(user);
// 	        	return done(null, user);
// 	      	} else {
// 	        	user = new User({
// 	          		oauthID: profile.id,
// 	          		name: profile.displayName,
// 	          		created: Date.now()
// 	        	});
// 	        	user.save((err) => {
// 	          	if(err) {
// 	            	console.log(err);  // handle errors!
// 	          	} else {
// 	            	console.log("saving user ...");
// 	            	// console.log(user);
// 	            	return done(null, user);
// 	          	}
// 	        	});
// 	    	}
//     	});
//   	})
// );

export default passport;
