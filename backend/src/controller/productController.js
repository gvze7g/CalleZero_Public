/**
 * product Model: name,price,description,categoryId,stock,size,imageUrl,isActive
 */

import productModel from "../models/product.js";

const productController = {};

productController.getAll = async (req,res) => {
    try {
        const products = await productModel.find().populate("categoryId", "name")
        return res.status(200).json(products);
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).json({ message: "Internal server error"});
    }
}

productController.getProductById = async (req, res) => {
  try {
    const product = await productModel
      .findById(req.params.id)
      .populate("categoryId", "name")

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.log("Error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

productController.InsertProducts = async (req,res) => {
    try {
        const {name,price,description,categoryId,stock,size,imageUrl,isActive} = req.body;
        const newProduct = new productModel({name,price,description,categoryId,stock,size,imageUrl,isActive});
        await newProduct.save();
        res.status(201).json({message:"New Product Saved"})
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).json({ message: "Internal server error"});
    }
}

productController.updateProduct = async (req,res) => {
    try {
        const {name,price,description,categoryId,stock,size,imageUrl,isActive} = req.body;
        await productModel.findByIdAndUpdate(req.params.id,{name,price,description,categoryId,stock,size,imageUrl,isActive},{new:true});
        res.status(200).json({message:"Product has Updated"});
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).json({ message: "Internal server error"}); 
    }
}

productController.deleteProudct = async (req,res) => {
    try {
        const products = await productModel.findByIdAndDelete(req.params.id);
        if(!products){
            return res.status(404).json({message:"Product not found"});
        }
        return res.status(200).json({message:"Product has been Deleted"})
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).json({ message: "Internal server error"});   
    }
}

export default productController;