const express = require('express');
const app = express();

app.get('/randomnumber', function(req, res) {
    const randomnum = Math.floor((Math.random() * 100) + 1);

    const response = {
        "randomnumber": randomnum
    }

    res.send(response)
})

app.listen('3000', function() {
    console.log(`Server is listening on port 3000...`);
});