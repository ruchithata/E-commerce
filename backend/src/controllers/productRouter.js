const { Router } = require('express');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');
const { productUpload } = require('../middleware/MulterUpload');
const path = require('path');

const productRouter = Router();

productRouter.post('/add-product', productUpload.array('files'), async(req,res) => {
    const {name, description, price, category, stock, tag, email} = req.body;
    const images = req.files.map((file )=> file.path);
    try{
        const seller = await userModel.findOne({email});
        if(!seller){
            return res.status(404).json({message: "Seller not found"});
        }

        if(images.length === 0){
            return res.status(400).json({message: "please upload at least one image"});
        }

        const newProduct = await productModel.create({
            name,
            description,
            price,
            image: images,
            category,
            stock,
            tag,
            email,
            images
        });

        console.log(images);
        console.log(newProduct);
        res.status(201).json({message: "Producted added successfully", newProduct});

    }
    catch(err) {
        console.log("error in creating a user",err);
        res.status(500).json({message: "Internal Server Error", err});
    }
});

module.exports = productRouter;