const express = require('express');
const app = express();

const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3001, () => console.log('Example app listening on port 3000!'))