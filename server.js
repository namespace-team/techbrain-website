const express = require('express');
const app = express();
const path = require('path');

// Set the views directory and EJS as the view engine
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// Define a route to render the index.ejs template
app.get('/', (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
