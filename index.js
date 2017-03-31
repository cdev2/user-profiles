const express = require(`express`);

const toyRouter = require('./toyRouter')


// Body parser gives us req.body
const bodyParser = require('body-parser')

const profileCtrl = require('./controllers/profileCtrl.js')
                            
const userCtrl = require('./controllers/userCtrl.js')             

// Cors allows traffic through
const cors = require('cors');

// Express-session gives us a unique session for each client on the front end
const session = require('express-session')

const config = require('./config')
var app = express();

app.use(express.static(__dirname + '/public'));



// Cors with no argument lets every site through
// Without cors, only local sites would be allowed
// With options, cors can restrict traffic to certain sites

// IF you didn't use cors, you'd have to set the rules yourself

app.use(cors())
app.use(bodyParser.json())
//app.use(session({secret: "keyboard_cat", resave: true, saveUninitialized: true}))
// IF exporting secrets
app.use(session(config.sessionConfig))

app.use('/toys', toyRouter)

app.post('/user', function(req, res, next) {
    // Don't have req.body
    console.log(req.body)
    res.send(req.body)
})
// The put and post use req.body to send info

// #1 from friendService.js
app.post('/login', userCtrl.login)

// Get requests don't have a body, so you have to use req.params or req.query

// This uses the id as req.params.id
//They have to type the id correctly, and we don't check any other fields
app.get('/user/:id', userCtrl.getOneUser)

//These requests don't have params, so we can send req.query searches. If they don't send anything, we can still send all users/profiles.
// We can also check the query to see what they want
app.get('/user', userCtrl.getUsers)
app.get('/profiles', profileCtrl.getProfiles)

app.get('/loggedUser', userCtrl.getLoggedUser)

app.listen(3000, ()=>{
    console.log("Server is working and listening on port 3000") 
});

//console.log("working")