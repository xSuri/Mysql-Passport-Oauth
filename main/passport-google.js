var host = "WRITE" // Type Your Callback Adress

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    // Type Your Client ID
    clientID: "WRITE", 
     // Type Your Client Secret
    clientSecret: "WRITE",
    callbackURL: host 
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));