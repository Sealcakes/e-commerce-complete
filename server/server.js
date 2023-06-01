const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();


app.get('/', (req, res) => {
    res.json({ message: 'This server should be live'})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});