//mongoose models
import catagory from "../models/catagory.js";

//get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const data = await catagory.find();
    res.status(200).json({
      catagories: data,
      message: "successfully data done",
    });
  } catch (error) {
    next(error);
  }
};

//post all products
export const postAllProducts = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await catagory.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      catagory: data,
      message: "successfully upload products",
    });
  } catch (error) {
    next(error);
  }
};

//Single products
export const singleProducts = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await catagory.findOne({ slug });
    res.status(200).json({
      catagory: data,
      message: "successfully single data done",
    });
  } catch (error) {
    next(error);
  }
};

//Delate products
export const delateProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await catagory.findByIdAndDelete(id);
    res.status(200).json({
      message: "successfully Delate data",
    });
  } catch (error) {
    next(error);
  }
};

//updata products data
export const updataProductsData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await catagory.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );
    res.status(200).json({
      catagory: data,
      message: "successfully update data",
    });
  } catch (error) {
    next(error);
  }
};
