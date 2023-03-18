import express from "express";
import {
  delateProducts,
  getAllProducts,
  postAllProducts,
  singleProducts,
  updataProductsData,
} from "../controllers/productCatagoryController.js";
import { multerMiddlewares } from "../utils/multer.js";

//routes init
const router = express.Router();

//router
router.get("/catagory", getAllProducts);
router.post("/catagory", multerMiddlewares, postAllProducts);
router.get("/catagory/:slug", singleProducts);
router.delete("/catagory/:id", delateProducts);
router.put("/catagory/:id", updataProductsData);

//export
export default router;
