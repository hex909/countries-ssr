const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );

// create express application
const app = express();
const PORT = process.env.PORT || 9000;

// serve static assets
app.use(express.static( path.resolve( __dirname, './build' ) ) );

// for any other requests, send `index.html` as a response
app.use( '*', ( req, res ) => {

    // read `index.html` file
    let indexHTML = fs.readFileSync( path.resolve( __dirname, './build/index.html' ), {
        encoding: 'utf8',
    } );

    // set header and status
    res.contentType( 'text/html' );
    res.status( 200 );

    return res.send( indexHTML );
} );

// run express server on port 9000
app.listen( PORT , () => {
    console.log( 'Express server started at http://localhost:9000' );
} );
