var host = "localhost"; // Your Host Adress
var loginType = "N/A"; // Default Login Type
var adminGoogleId = "WRITE"; // Your Google Id to have Admin in this basic apk
var port = 3000; // Your App Port

//

console.log("Loading liblary...");

const express = require('express');

const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mysql = require('mysql'); // Importing Mysql: npm install mysql --save
const cookieSession = require('cookie-session'); // Install from npm "cookie-session"
require('./passport-google'); // < -- Your Setting To write

//

app.use(express.static(__dirname + "/image"));

//

///

console.log("\nC0nnecting to database...")

var con = mysql.createConnection({ // Creating MYSQL Connection
  host: "WRITE", // Your Host Adress: localhost
  user: "WRITE", // Your User Name: user/root
  password: "WRITE", // Your Password DB: ""
  database: "WRITE" // Your Using Database: MyFirstTable
});

con.connect(function(err) { // Connecting to DB
    if (err) throw err; // Error handler
    console.log("Connected!\n"); // If connected Showing "Connected!"
  });

///


app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
      next();
  } else {
      res.sendStatus(401);
  }
}

//

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

//

//Main Website
app.get('/', (req, res) => { 

    var text =
    'Example Home page!' +
     `<p><a href="http://`+host+`:`+port+`/google"> <img src="./index.png" weight=125px height=125px> </a></p><br>`;

    res.send(text);
  
})

//

// If auth failed

app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/good', isLoggedIn, (req, res) => {

  var text =
  `<p>Hi! ${req.user.displayName} </p>` +
   `<p><a href="http://`+host+`:`+port+`/logout">Click To Logout</a></p>`+
    `<head><style>body{background-color:gray;}p{text-align: center; color:white;}</style></head>`;

    
  res.send(text);

})

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    
    // If You Admin 

    if (`${req.user.id}` == adminGoogleId){

      console.log('Admin Login');
      res.redirect("/adminpanel");
      loginType = "Google"
            
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

//

// If You have admin geting this basic panel

app.get('/adminpanel', isLoggedIn, (req, res) => {

    // Inserting to database login log

    var sql = "INSERT INTO loging_logs (id ,userId, userTypeOAuth, userIp) VALUES (NULL,"+"'"+req.user.id+"'"+","+"'"+loginType+"'"+","+"'"+req.ip+"'"+")";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });


    var br = `<br>`;
    var loginStyle = `<head><style>#loginType{background-color:black; position:absolute; bottom:-10; width:99%;}</style></head>`;


    var text =
    `<p>Hi Admin! Your Admin ID: ${req.user.id} </p>` + 
    `<p><a href="http://`+host+`:`+port+`/logout">Click To Logout</a></p>`+ 
    `<head><style>body{background-color:gray;}p{text-align: center; color:white;}</style></head>`;
    
    res.send(text+br+`<p id="loginType">`+loginType+`</p>`+loginStyle);
  
})

//


// App Port

app.listen(port, () => {
 
    console.log('Server listening on port: '+port.toString());
 
})