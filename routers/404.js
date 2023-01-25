const express = require( 'express' );
const router = express.Router();

router.get( '*', ( req,res ) => {
    res.statusCode = 404;
    res.render( 'page404.pug' );
    res.end();
})

module.exports = router;