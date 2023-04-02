import express from "express";
import {
  delateProducts,
  getProducts,
  postProducts,
} from "../controllers/productController.js";
import { multerProductMiddlewares } from "../utils/multer.js";

//routes init
const router = express.Router();

//router
router.route("/").get(getProducts).post(multerProductMiddlewares, postProducts);
router.route("/:id").delete(delateProducts);

//export
export default router;
