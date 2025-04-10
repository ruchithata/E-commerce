const { Router } = require("express");
const userModel = require("../models/userModel");
const { Avatar } = require("../middleware/MulterUpload");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config({
    path: './src/config/.env'
});

const secret = process.env.SECRETKEY;

const userRouter = Router();

userRouter.post('/sign-up', Avatar.single("avatar"), async(req,res) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message: "fill all the data"});
        }
        const user = await userModel.findOne({email});
        if (user){
            return res.status(400).json({message: "User already exists."});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            avatar: req.file? req.file.path : ""
        });

        console.log(req.file);
        console.log(newUser);
        res.status(201).json({success: true, message: "Registered successfully.", newUser});
    }
    catch(err){
        console.log("error in adding a new user", err);
        res.status(400).json({message: "Internal Server Error"});
    }
});

userRouter.post('/login', async(req,res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "Provide your email and password"});
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).json({message: "Invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid password"});
        }

        const token = jwt.sign({email}, secret, {expiresIn: '1h'});

        console.log(user);
        res.status(200).json({success: true, message: "Logged in successfully", token, user});
    }
    catch(err){
        console.log("error in logging in", err);
        res.status(500).json({message: "Internal Server Error"});
    }
});


userRouter.get('/all-users', async(req,res) => {
    try{
        const users = await userModel.find();
        if(!users){
            res.status(404).json({message: "No one exist"});
        }

        console.log(users);
        res.status(200).json({message: "Users", users});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
});

userRouter.get('/user/id', async(req,res) => {
    try{
        const { id } = req.params;
        const user_id = await userModel.findById({id});
        if(!user_id){
            res.status(404).json({message: "User does not exists"});
        }

        console.log(user_id);
        res.status(201).json({message: "user found successfully.", user_id});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
});





module.exports = userRouter;