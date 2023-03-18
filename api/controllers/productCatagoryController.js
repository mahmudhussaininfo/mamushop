//mongoose models
import catagory from "../models/catagory.js";

//get all products
export const getAllProducts = async (req, res) => {
  try {
    const data = await catagory.find();
    res.status(200).json({
      catagories: data,
      message: "successfully data done",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.random);
  }
};

//post all products
export const postAllProducts = async (req, res) => {
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
    console.log(`${error.message}`.bgRed.random);
  }
};

//Single products
export const singleProducts = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await catagory.findOne({ slug });
    res.status(200).json({
      catagory: data,
      message: "successfully single data done",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.blue);
  }
};

//Delate products
export const delateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await catagory.findByIdAndDelete(id);
    res.status(200).json({
      message: "successfully Delate data",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.random);
  }
};

//updata products data
export const updataProductsData = async (req, res) => {
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
    console.log(`${error.message}`.bgRed.random);
  }
};
