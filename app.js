const express = require('express');
const app     = express();


app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/ready', (req,res) => {
    res.send('The App is Ready');
});

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`)
});


