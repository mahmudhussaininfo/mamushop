import express from "express";
import {
  delateBrandProduct,
  getAllBrands,
  postBrandsProduct,
  singleBrandProduct,
  updateBrandProduct,
} from "../controllers/productBrandController.js";
import { multerBrandMiddlewares } from "../utils/multer.js";

//routes init
const router = express.Router();

//router
router.get("/brands", getAllBrands);
router.post("/brands", multerBrandMiddlewares, postBrandsProduct);
router.get("/brands/:slug", singleBrandProduct);
router.put("/brands/:id", updateBrandProduct);
router.delete("/brands/:id", delateBrandProduct);

//export
export default router;
