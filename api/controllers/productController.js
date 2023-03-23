import { createSlug } from "../helper/slugCreate.js";
import Product from "../models/product.js";

//get All Products
export const getProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      products: data,
      message: "all products done",
    });
  } catch (error) {
    next(error);
  }
};

//postAll Products
export const postProducts = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(createSlug(name));
    // const data = await Product.create({name});
    // res.status(200).json({
    //   products: data,
    //   message: "all products done",
    // });
  } catch (error) {
    next(error);
  }
};
