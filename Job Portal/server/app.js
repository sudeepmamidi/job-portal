require('./config/config');
require('./models/db');
require('./config/passportConfig');
// require('./config/adminpass');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');
const adminIndex = require('./routes/adminjobpost');
const adminprofile = require('./routes/adminprofile');
const personaldetails = require('./routes/personaldetails');
const savedjobs = require('./routes/saved');
const appliedjobs = require('./routes/applied');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/admin',adminIndex);
app.use('/adminprofile',adminprofile);
app.use('/users',personaldetails);
app.use('/save',savedjobs);
app.use('/apply',appliedjobs);
// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));