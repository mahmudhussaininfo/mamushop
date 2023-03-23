import mongoose from "mongoose";

//create schema
const mongoDBProductSchema = mongoose.Schema(
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
    gallery: {
      type: Array,
      default: null,
      trim: true,
    },
    stock: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    desc: {
      type: String,
    },
    short_desc: {
      type: String,
    },
    catagories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "catagory",
    },
    brands: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "brand",
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
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
export default mongoose.model("Product", mongoDBProductSchema);
