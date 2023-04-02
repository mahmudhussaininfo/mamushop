import { createSlug } from "../helper/slugCreate.js";
import Product from "../models/product.js";
import { unlinkSync } from "fs";

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
    const {
      name,
      price,
      sale_price,
      stock,
      desc,
      short_desc,
      catagories,
      brands,
      tags,
    } = req.body;

    //get photo
    const photo = req.files["product-photo"][0].filename;

    //gallery photo
    const gallery = [];
    [...req.files["product-gallery-photo"]].forEach((item) => {
      gallery.push(item.filename);
    });
    const data = await Product.create({
      name,
      slug: createSlug(name),
      price,
      sale_price,
      stock,
      desc,
      short_desc,
      catagories,
      brands,
      tags,
      photo,
      gallery,
    });
    res.status(200).json({
      products: data,
      message: "all products done",
    });
  } catch (error) {
    next(error);
  }
};

// Delate Products
export const delateProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);

    //delate photo files from mechine
    unlinkSync(`api/public/products/${data.photo}`);

    //delate gallery files from mechine
    data.gallery.forEach((item) => {
      unlinkSync(`api/public/products/${item}`);
    });

    res.status(200).json({
      products: data,
      message: "Delated done",
    });
  } catch (error) {
    next(error);
  }
};
