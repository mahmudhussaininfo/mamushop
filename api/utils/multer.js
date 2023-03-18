//multer
import multer from "multer";

//multer setup
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, "api/public/product/catagory");
  },
});

//multer middlewares
export const multerMiddlewares = multer({ storage }).single("catagory-photo");

//export
export default storage;
