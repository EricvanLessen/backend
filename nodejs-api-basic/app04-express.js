const express = require('express');
const app = express();

// express uses send, http used end
app.get('/', (req, res) => {
    res.send("hey whats up")
});

app.listen(3000)