var host = "localhost"; // Your Host Adress
var adminGoogleId = "WRITE"; // Your Google Id to have Admin in this basic apk

// LIBLARY

console.log("Loading liblary...");

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mysql = require('mysql'); // Importing Mysql: npm install mysql --save
const cookieSession = require('cookie-session'); // Install from npm "cookie-session"
require('./passport-google'); // < -- Your Setting To write

const app = express();

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
}))


app.use(express.static(__dirname + "/image"));


// AUTHS

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/logout' }),
  function(req, res) {
    
    // If You Admin 

    if (`${req.user.id}` == adminGoogleId){

      console.log('Admin Login');
      res.redirect("/adminpanel");
            
    }
    else{

      res.redirect('/good');

    }
    
  }
);

//Logout User Session

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

// -*-*-*-*-*

app.use('/',  routes);
app.use('/good' , routes);
app.use('/adminpanel',  routes);

module.exports = app;