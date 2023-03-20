//init brand model
import brand from "../models/brand.js";

// Get All Brands
export const getAllBrands = async (req, res, next) => {
  try {
    const data = await brand.find();
    res.status(200).json({
      brands: data,
      message: "successfully brand Data uploaded",
    });
  } catch (error) {
    next(error);
  }
};

// Post All Brands
export const postBrandsProduct = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await brand.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      brands: data,
      message: "successfully added brand data",
    });
  } catch (error) {
    next(error);
  }
};

// Single Brands products
export const singleBrandProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await brand.findOne({ slug });
    res.status(200).json({
      brands: data,
      message: "successfully single brand data opened",
    });
  } catch (error) {
    next(error);
  }
};

// update Brands products
export const updateBrandProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await brand.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );
    res.status(200).json({
      brands: data,
      message: "successfully updated brand data",
    });
  } catch (error) {
    next(error);
  }
};

// Delate Brands products
export const delateBrandProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await brand.findByIdAndDelete(id);
    res.status(200).json({
      brands: data,
      message: "successfully Delated brand data",
    });
  } catch (error) {
    next(error);
  }
};
