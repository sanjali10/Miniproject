const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
// create express app
const app = express();

app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//Configuring the datbase

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to the database

mongoose.connect(dbConfig.url,{
    useNewUrlParser : true
}).then(()=>{
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// var db = mongoose.connection;

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Movie Cinema."});
});

//Use Movie routes in the App
let mveApiRoutes =  require('./routes/movie.route');
app.use('/mvs', mveApiRoutes);
//Use Actor routes in the App
let actrApiRoutes =  require('./routes/actor.routes');
app.use('/actr', actrApiRoutes);
//Use Producer routes in the App
let producerApiRoutes =  require('./routes/producer.routes');
app.use('/prod', producerApiRoutes);
// Use ActrMve for multiple rltns routes in the routes
let actrMveApiRoutes =  require('./routes/actorMovie.routes');
app.use('/actrMve',actrMveApiRoutes);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});