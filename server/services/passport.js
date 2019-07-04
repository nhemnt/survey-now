const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys')

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => { 
    User.findById(id).then((user) => { 
        done(null, user);
    })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
        const existingUser  = await User.findOne({ googleId: profile.id }) 
            if (existingUser) {
                //already have a user with the given profile id
                console.log('already', existingUser);
                return done(null, existingUser);
            }

            //dont have a user record with this id, make a new record
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);

}));