import mongoose from "mongoose";
import colors from "colors";

//mongodb init
const mongoDBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected successfully`.bgGreen.yellow);
  } catch (error) {
    console.log(`${error.message}`.bgRed.blue);
  }
};

export default mongoDBConnect;
