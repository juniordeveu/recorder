const express = require( 'express' );
const router = express.Router();

router.get( '*', ( req,res ) => {
    res.statusCode = 404;
    res.render( 'page404.pug', { titlePage: '404 :(' } );
    res.end();
})

module.exports = router;