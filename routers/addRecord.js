const express = require( 'express' );
const { route } = require( './recorder' );
const router = express.Router();


/* Page with form add new record */
router.get( '/newrecord' , ( req, res ) => {
    res.status( 200 ).render( "addRecord.pug" );
    res.end();
})


router.post( '/record', ( req, res ) => {
    res.statusCode( 304 );
    res.setHeader( 'Location', '/' )
    res.end();
})



module.exports = router;
