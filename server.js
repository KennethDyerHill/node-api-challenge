const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('This works in server');
});

server.listen(5000, () => console.log('API running on port 5000'));