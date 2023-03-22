import express from "express";
import {
  getAllTags,
  postAllTags,
} from "../controllers/productTagConrtroller.js";

//routes init
const router = express.Router();

//router
router.route("/tag").get(getAllTags).post(postAllTags);

//export
export default router;
