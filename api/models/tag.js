import mongoose from "mongoose";

//create schema
const mongoDBTagSchema = mongoose.Schema(
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
export default mongoose.model("Tag", mongoDBTagSchema);
