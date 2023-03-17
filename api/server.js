import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// express init
const app = express();
dotenv.config();

// port init
const Port = process.env.PORT || 6060;

// listen
app.listen(Port, () => {
  console.log(`server running on port ${Port}`.bgCyan.green);
});
