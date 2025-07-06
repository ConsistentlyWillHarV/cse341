const express = require("express");
const app = express();


mongodb = require('./data/database');

// Correctly import the routes
const routes = require('./routes');

// Use the routes middleware
app.use('/', routes);

const port = process.env.PORT || 3000;

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