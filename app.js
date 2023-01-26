const config = {
    port: 7777,
    info() {
        console.log( `Server runs on port ${ config.port }` );
    }
}

const express = require( 'express' );
const app = express();
const path = require( 'path' );
const pathUtils  = require( './utils/pathUtils' );
const bodyParser = require('body-parser');

/* import routs */
const routerRecorder = require( './routers/recorder' ) 
const routerAddNewRecord = require( './routers/addRecord' )
const router404 = require( './routers/404');

/* end IR */
app.use(bodyParser.urlencoded( { extended:false } ))

/* set pug engine and  static files*/
app.set( 'view engine', 'pug' );
app.set( 'views', 'views' );
app.use( express.static( path.join( pathUtils, 'public') ) )
/* end */




app.use( routerAddNewRecord.routers );
app.use( routerRecorder );
app.use( router404  );

app.listen( config.port, config.info )