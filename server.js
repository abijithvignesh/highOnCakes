//imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// Application
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use(express.static(path.join(__dirname, './Frontend/build')));
app.get('*', ((request, response) => {
    response.sendFile(path.join(__dirname, './Frontend/build'));
}))

const port = process.env.PORT || 8080;
app.listen(port,  () => {
    console.log(`Server started on port ${port}`);
})