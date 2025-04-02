const express = require('express');
const app = express();
const cors = require('cors')

require('dotenv').config({
    path: 'src/config/.env'
});
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, async() => {
    try{
        console.log(`server is running in port ${PORT}`);
    }
    catch(err){
        console.log("error in server", err);
    }
});