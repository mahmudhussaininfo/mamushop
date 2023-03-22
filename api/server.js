import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import productCatagoryRouter from "./routes/productCatagoryroute.js";
import brandRouter from "./routes/brandRoute.js";
import tagRouter from "./routes/tagRoute.js";
import mongoDBConnect from "./config/db.js";
import { errorHandler } from "./middlewares/errorHandle.js";

// express init
const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// static setup
app.use(express.static("api/public"));

// route setup
app.use("/api/v1/product", productCatagoryRouter);
app.use("/api/v1/product", brandRouter);
app.use("/api/v1/product", tagRouter);

// port init
const Port = process.env.PORT || 9090;

// Error Handler
app.use(errorHandler);

// listen
app.listen(Port, () => {
  mongoDBConnect();
  console.log(`server running on port ${Port}`.bgCyan.green);
});
