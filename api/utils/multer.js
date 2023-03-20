//multer
import multer from "multer";

//multer setup
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (file.fieldname == "catagory-photo") {
      cb(null, "api/public/catagories");
    }
    if (file.fieldname == "brand-photo") {
      cb(null, "api/public/brand");
    }
    if (
      file.fieldname == "product-photo" ||
      file.fieldname == "product-Gallery-photo"
    ) {
      cb(null, "api/public/products");
    }
  },
});

//multer middlewares
export const multerCategoryMiddlewares = multer({ storage }).single(
  "catagory-photo"
);
export const multerBrandMiddlewares = multer({ storage }).single("brand-photo");
export const multerProductMiddlewares = multer({ storage }).fields([
  {
    name: "product-photo",
    maxCount: 1,
  },
  {
    name: "product-Gallery-photo",
    maxCount: 10,
  },
]);

//export
export default storage;
