const express = require( 'express' );
const { route } = require( './recorder' );
const router = express.Router();

let records = [];

/* Page with form add new record */
router.get( '/newrecord' , ( req, res ) => {
    res.status( 200 ).render( "addRecord.pug", { titlePageAddRecord: 'New record' } );
    res.end();
})

router.post( '/record', ( req, res ) => {
    try {
        records.push( { taskTitle:       req.body.taskTitle,
                        taskLink:        req.body.taskLink,
                        taskDescription: req.body.taskDescription } )
        res.statusCode = 302;
        res.setHeader( 'Location', '/' ) 
        res.end();
    } catch {
        console.log( "Err" )
    }

} )



exports.routers = router;
exports.records = records;

