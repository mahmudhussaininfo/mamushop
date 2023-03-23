import express from "express";
import { getProducts, postProducts } from "../controllers/productController.js";

//routes init
const router = express.Router();

//router
router.route("/").get(getProducts).post(postProducts);

//export
export default router;
