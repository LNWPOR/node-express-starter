var passport         =   require('passport'),
	  localStrategy    = 	 require('passport-local').Strategy,
	  facebookStrategy =	 require('passport-facebook').Strategy;

var User	= 	require('../models/user'),
	 auth    =	require('./auth');


// serialize and deserialize
passport.serializeUser(function(user, done) {
  	console.log('serializeUser: ' + user._id);
  	done(null, user._id);
});
passport.deserializeUser(function(id, done) {
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
//   	function(accessToken, refreshToken, profile, done) {
// 	    User.findOne({ oauthID: profile.id }, function(err, user) {
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
// 	        	user.save(function(err) {
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

module.exports = passport;
