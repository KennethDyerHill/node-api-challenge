const express = require('express');

const server = express();

server.use(express.json());

server.get('./data/lambda.db3', (req, res) => {
    res.send('This works in server');
});

server.listen(7000, () => console.log('API running on port 7000'));