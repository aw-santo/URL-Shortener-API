const express = require('express');
const app = express();
const { dict } = require('./map');
const { makeid } = require('./randomKey');

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    res.send('base URL');
});

// makeid('a.com');
// makeid('b.com');
// makeid('c.com');
console.log(dict);

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}.`);
});