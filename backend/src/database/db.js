const { connect } = require("mongoose");

const ConnectDB = async(url) =>{
    try{
        await connect(url);
        console.log("connected to database");
    }
    catch(err){
        console.log("error while connect to database", err);
    }
}

module.exports = ConnectDB;