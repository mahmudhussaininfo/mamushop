import Tag from "../models/tag.js";

// All tag add
export const getAllTags = async (req, res, next) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      tags: data,
      message: "successfully tag data added",
    });
  } catch (error) {
    next(error);
  }
};
// post tag
export const postAllTags = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Tag.create({ name, slug });
    res.status(200).json({
      tags: data,
      message: "successfully created data",
    });
  } catch (error) {
    next(error);
  }
};
