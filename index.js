const express = require('express');
const app = express();

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    res.send('base URL');
});


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}.`);
});