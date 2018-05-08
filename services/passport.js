const passport = require('passport');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = mongoose.model('users');

passport.serializeUser((user,done) => {
	done(null, user.id); //user id is the mongo id  not the googleId
});

passport.deserializeUser((id, done) => {
	User.findById(id)
	.then(user => {
		done(null,user);
	});
});

passport.use(
	new GoogleStrategy(
	{
	clientID: keys.googleClientID,
	clientSecret:keys.googleCLientSecret,
	callbackURL:'/auth/google/callback',
	proxy:true
	},
		async (accessToken,refreshToken,profile,done) => {
			let existingUser = await User.findOne({ googleId:profile.id }) //if nothing return existingUser = null
			
			if(existingUser){
				//we already have an user
				done(null,existingUser) //first argument is the error object, the second argument, second argument is the userRecord (saying we are done);
			}else{
				//we don't have an user record with this ID, make a new one
				let newUser = await new User({ googleId: profile.id }).save()
				done(null, newUser)
			}
		
	}
  )
);
