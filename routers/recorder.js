const express = require( 'express' );
const router = express.Router();
/* get data from form */
const getRecord = require( './addRecord' )
/* end */


router.get( '/', ( req,res ) => {
    const newRecord = getRecord.records; 
    res.render( 'recorder.pug', { titlePageRecorder: 'Recorder App',
                                  objRecord: newRecord } );

})

module.exports = router;