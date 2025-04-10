const express = require('express');
const app = express();
const cors = require('cors');
const ConnectDB = require('./src/database/db');
// const Error = require('./src/middleware/Error');
// const ErrorHandler = require('./src/utils/errorHandler');
const userRouter = require('./src/controllers/userRouter');

require('dotenv').config({
    path: 'src/config/.env'
});
const PORT = process.env.PORT || 5000;
const URL = process.env.URL;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
// app.use(Error);
// app.use(ErrorHandler);

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.use('/UC', userRouter);

app.listen(PORT, async() => {
    try{
        await ConnectDB(URL);
        console.log(`server is running in port ${PORT}`);
    }
    catch(err){
        console.log("error in server", err);
    }
});