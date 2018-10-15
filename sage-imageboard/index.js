const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.use(express.static('/.public'));
// app.use(express.static('public'));


app.listen(8080, () => {
    console.log('Listening...');
});
