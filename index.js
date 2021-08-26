const express = require('express');
const app =express(); // set up for listening

app.get('/',(req,res)) => { 
    res.send({hi:'there'});

});



