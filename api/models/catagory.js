import mongoose from "mongoose";

//create schema
const mongoDBSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
      trim: true,
    },
    slug: {
      type: String,
      requied: true,
      trim: true,
      unique: true,
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//export
export default mongoose.model("catagory", mongoDBSchema);
