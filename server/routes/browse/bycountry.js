 const express = require('express');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');

 let Country = require('../../models/country');
 let router = express.Router();

 mongoose.Promise = Promise;

 router.get('/', function(req, res){
 	console.log('server');
    Country.find({'numberArtists': {$gt: 0}})
        .then(Country => {
            console.log({ Country });
            res.json( { Country } );
        })
});

 module.exports = router;
