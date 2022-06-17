const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routers'));


app.listen(port, (err) => {
    if (err) {
        console("Error");
    }
    console.log("Success");
});
