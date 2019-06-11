const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken: ', accessToken)
        console.log('refreshToken: ', refreshToken)
        console.log('profile: ', profile)
        console.log('accessToken: ',accessToken )
}));