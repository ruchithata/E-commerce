const express = require('express');
const app = express();
const cors = require('cors');
const ConnectDB = require('./src/database/db');
const Error = require('./src/middleware/Error');
const ErrorHandler = require('./src/utils/errorHandler');

require('dotenv').config({
    path: 'src/config/.env'
});
const PORT = process.env.PORT || 5000;
const URL = process.env.URL;

app.use(express.json());
app.use(cors());
app.use(Error);
app.use(ErrorHandler);

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, async() => {
    try{
        await ConnectDB(URL);
        console.log(`server is running in port ${PORT}`);
    }
    catch(err){
        console.log("error in server", err);
    }
});