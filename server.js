const express = require("express");

const bodyParser = require('body-parser');
const mongodb = require('./data/database');

const app = express();

const port = process.env.PORT || 3000;
// Correctly import the routes



app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


// Use the routes middleware
app.use('/', require('./routes'));


//body parser



//wrap mongodb
mongodb.initDb((err) => {
    if (err) {
        console.log(err); // 'Console' should be 'console'
    } else {
        app.listen(port, () => {
            console.log(`Database listening and Node running on port ${port}`);
        });
    }
});


// app.listen(port, () => {
//     console.log(`Running on port ${port}`);
// });