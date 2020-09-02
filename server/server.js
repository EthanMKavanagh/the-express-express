// bring express into your project
// you will need to `npm init` and `npm install express` first
const express = require( `express` );

// create your express app
const app = express();

app.use( express.static( `server/public` ) );

// creating moment
var moment = require('moment');

// This is your array of trains
let trains = require( `./modules/trains.js` );

// -------- BASE -----//

// Create your `/train` route here
// when a user visits localhost:5000/train
// this route should return the array of trains
app.get( `/train`, function( req, res ){
    res.send( trains );
} );

// Create your `/first-train` route here
// when a user visits localhost:5000/first-train
// this route should return the first train in the array
app.get( `/first-train`, function( req, res ){
    let firstTrain = trains[ 0 ];
    res.send( firstTrain );
} ); 

// Create your `/last-train` route here
// when a user visits localhost:5000/last-train
// this route should return the last train in the array
app.get( `/last-train`, function( req, res ){
    let lastTrain = trains[ trains.length - 1 ];
    res.send( lastTrain );
} );


// -------- STRETCH -----//

// Create your `/count` route here
// when a user visits localhost:5000/count
// this route should return the number of trains in the array
// NOTE: express doesn't like it when you return numbers
// instead, return an object like { totalCount: 4 }
app.get( `/count`, function( req, res ){
    let trainsNumber = trains.length
    let totalCount = { count: trainsNumber }
    res.send( totalCount ); 
} );

// Create your `/random` route here
// when a user visits localhost:5000/random
// this route should return a single train at random
let i = 0;
function getNextTrain(){
    let nextTrain = trains[ i ];
    i++
    if( i >= trains.length ){
        i = 0;
    }
    return nextTrain;
}

app.get( `/random`, function( req, res ){
    let nextTrain = getNextTrain();
    res.send( nextTrain );
} );

// `/next` using moment
app.get( `/next`, function( req, res ){
    let time = moment().format('MMMM Do YYYY, h:mm:ss a');
    // How to add 5 min to `time`?
    res.send( time );
} );


// -------- BASE -----//

// Don't forget to start your app by running `.listen()`
app.listen( 5000, function(){
    console.log( `I'm listening on 5000` );
} );