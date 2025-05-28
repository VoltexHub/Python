const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let dataStore = {}; // In-memory database

app.post('/set', (req, res) => {
    const { key, value } = req.body;
    dataStore[key] = value;
    res.json({ success: true });
});

app.get('/get/:key', (req, res) => {
    const key = req.params.key;
    const value = dataStore[key] || null;
    res.json({ value });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
